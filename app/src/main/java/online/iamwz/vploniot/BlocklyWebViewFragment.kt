package online.iamwz.vploniot

import android.annotation.SuppressLint
//import android.app.Fragment
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.annotation.NonNull
import androidx.annotation.Nullable
import androidx.fragment.app.Fragment
import android.os.Handler

import online.iamwz.vploniot.ui.task_manager.TaskManager


/**
 * This fragments contains and manages the web view that hosts Blockly.
 */
class BlocklyWebViewFragment : Fragment() {
    @Nullable
    protected var mWebView: WebView? = null

    @SuppressLint("SetJavaScriptEnabled")
    @Nullable
    override fun onCreateView(
        @NonNull inflater: LayoutInflater, @Nullable container: ViewGroup?,
        @Nullable savedInstanceState: Bundle?
    ): View? {
        TaskManager.mWebView = mWebView
        mWebView = WebView(inflater.context)
        mWebView?.webChromeClient = WebChromeClient()
        val webSettings: WebSettings = mWebView!!.settings
        webSettings.javaScriptEnabled = true
        mWebView?.loadUrl("file:///android_asset/blockly/webview.html")
        mWebView?.addJavascriptInterface(JSInterface(requireContext()), "JSInterface")
//        mWebView?.evaluateJavascript("var custom_blocks = [];"){}

        val blocks = TaskManager.taskBlocks[TaskManager.currentTask]
        Handler().postDelayed({
            mWebView?.evaluateJavascript("var custom_blocks = $blocks;") {

            }
            mWebView?.evaluateJavascript("Blockly.defineBlocksWithJsonArray(custom_blocks)") {

            }

            //restore workspace
            var taskXML = TaskManager.taskXmls[TaskManager.currentTask]
            if (taskXML != "") {
                taskXML = taskXML?.replace("\"","\\\"")
                mWebView?.evaluateJavascript("loadWorkspace(\"$taskXML\")") {}
            }
        }, 100)


        Handler().postDelayed({

//            TaskManager.taskBlocks.map { "Blockly.defineBlocksWithJsonArray(${it.value})" }.forEach {
//                mWebView?.evaluateJavascript(it){}
//            }
//            TaskManager.taskBlocks.map { "var custom_blocks = ${it.value})" }.forEach {
//                mWebView?.evaluateJavascript(it){}
//            }

//            mWebView?.evaluateJavascript(TaskManager.toolboxConfigJS) {
//                print(it)
//            }
////          add blocks
//            mWebView?.evaluateJavascript(TaskManager.blockConfigJSON) {
//                print(it)
//            }

        }, 1000)
        return mWebView
    }
}