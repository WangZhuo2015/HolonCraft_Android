package online.iamwz.vploniot

import android.webkit.JsResult
import online.iamwz.vploniot.JsDialogHelper
import android.webkit.JsPromptResult
import android.webkit.WebView
import android.widget.EditText
//import online.iamwz.vploniot.JsDialogHelper.PositiveListener
import android.view.LayoutInflater
import online.iamwz.vploniot.R
import android.widget.TextView
import android.content.DialogInterface
import android.app.Activity
import android.webkit.WebChromeClient

/**
 * Provides native hooks for JavaScript console dialog functions.
 */
class WebChromeClient : WebChromeClient() {
    override fun onJsAlert(view: WebView, url: String, message: String, result: JsResult): Boolean {
        JsDialogHelper(result, JsDialogHelper.Companion.ALERT, null, message, url)
            .showDialog(view.context)
        return true
    }

    override fun onJsConfirm(
        view: WebView,
        url: String,
        message: String,
        result: JsResult
    ): Boolean {
        JsDialogHelper(result, JsDialogHelper.Companion.CONFIRM, null, message, url)
            .showDialog(view.context)
        return true
    }

    override fun onJsPrompt(
        view: WebView, url: String, message: String, defaultValue: String,
        result: JsPromptResult
    ): Boolean {
        JsDialogHelper(result, JsDialogHelper.Companion.PROMPT, defaultValue, message, url)
            .showDialog(view.context)
        return true
    }
}