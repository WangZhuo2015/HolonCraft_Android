/**
 * Copyright (C) 2013 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package online.iamwz.vploniot

import android.app.Activity
import android.app.AlertDialog
import android.content.Context
import android.content.DialogInterface
import android.os.Message
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.webkit.JsPromptResult
import android.webkit.JsResult
import android.webkit.WebView
import android.widget.EditText
import android.widget.TextView
import androidx.annotation.Nullable

/**
 * Helper class to create JavaScript dialogs.
 * Adapted from android-9.0.0_r10/core/java/android/webkit/JsDialogHelper.java.
 * Removes dialog title (page domain) and uses a larger prompt message area than original.
 */
class JsDialogHelper {
    @Nullable
    private val mDefaultValue: String?
    private val mResult: JsResult
    private val mMessage: String
    private val mType: Int
    private val mUrl: String

    constructor(
        result: JsResult, type: Int, @Nullable defaultValue: String?,
        message: String, url: String
    ) {
        require(!(type == PROMPT && result !is JsPromptResult)) { "JsDialogHelper PROMPT requires JsPromptResult" }
        mResult = result
        mDefaultValue = defaultValue
        mMessage = message
        mType = type
        mUrl = url
    }

    constructor(result: JsResult, msg: Message) {
        mResult = result
        mDefaultValue = msg.data.getString("default")
        mMessage = msg.data.getString("message").toString()
        mType = msg.data.getInt("type")
        mUrl = msg.data.getString("url").toString()
    }

    fun invokeCallback(
        client: WebChromeClient,
        webView: WebView?
    ): Boolean {
        return when (mType) {
            ALERT -> client.onJsAlert(webView!!, mUrl, mMessage, mResult)
            CONFIRM -> client.onJsConfirm(webView!!, mUrl, mMessage, mResult)
            PROMPT -> client.onJsPrompt(
                webView!!,
                mUrl,
                mMessage,
                mDefaultValue!!,
                mResult as JsPromptResult
            )
            else -> throw IllegalArgumentException("Unexpected type: $mType")
        }
    }

    fun showDialog(context: Context) {
        if (!canShowAlertDialog(context)) {
            Log.w(TAG, "Cannot create a dialog, the WebView context is not an Activity")
            mResult.cancel()
            return
        }
        val edit: EditText?
        val builder: AlertDialog.Builder = AlertDialog.Builder(context)
        builder.setOnCancelListener(CancelListener())
        if (mType != PROMPT) {
            edit = null
            builder.setMessage(mMessage)
            builder.setPositiveButton(android.R.string.ok, PositiveListener(null))
        } else {
            val view: View = LayoutInflater.from(context).inflate(R.layout.js_prompt, null)
            edit = view.findViewById<EditText>(R.id.js_prompt_value)
            edit.setText(mDefaultValue)
            builder.setPositiveButton(android.R.string.ok, PositiveListener(edit))
            (view.findViewById<View>(R.id.js_prompt_message) as TextView).setText(mMessage)
            builder.setView(view)

            // TODO: Open keyboard and place text cursor.
        }
        if (mType != ALERT) {
            builder.setNegativeButton(android.R.string.cancel, CancelListener())
        }
        val dialog: AlertDialog = builder.show()
    }

    private inner class CancelListener : DialogInterface.OnCancelListener,
        DialogInterface.OnClickListener {
        override fun onCancel(dialog: DialogInterface) {
            mResult.cancel()
        }

        override fun onClick(dialog: DialogInterface, which: Int) {
            mResult.cancel()
        }
    }

    private inner class PositiveListener(edit: EditText?) : DialogInterface.OnClickListener {
        private val mEdit: EditText?
        override fun onClick(dialog: DialogInterface, which: Int) {
            if (mEdit == null) {
                mResult.confirm()
            } else {
                (mResult as JsPromptResult).confirm(mEdit.getText().toString())
            }
        }

        init {
            mEdit = edit
        }
    }

    companion object {
        private const val TAG = "JsDialogHelper"
        // Dialog types
        /** An alert dialog, for console.alert(..).  */
        const val ALERT = 1

        /** An alert dialog, for console.confirm(..).  */
        const val CONFIRM = 2

        /** An alert dialog, for console.prompt(..).  */
        const val PROMPT = 3
        private fun canShowAlertDialog(context: Context): Boolean {
            return context is Activity
        }
    }
}