package online.iamwz.vploniot.ui.task_manager

import android.annotation.SuppressLint
import android.content.Context
import android.os.Handler
import android.webkit.WebView
import android.widget.Toast
import online.iamwz.vploniot.NetworkManager
import java.time.Duration
import java.time.Instant

@SuppressLint("StaticFieldLeak")
object TaskManager {
    var startTime: Instant? = null
        @SuppressLint("WrongConstant")
        set(value) {
            Toast.makeText(mContext, "Task start at $value", Toast.LENGTH_SHORT).show()
            field = value
        }

    var endTime: Instant? = null
        @SuppressLint("WrongConstant")
        set(value) {
            field = value
            taskTimeConsumpation[currentTask] = totalDuration.toString()
            Toast.makeText(mContext, "Task ends at $value\nThis Task takes $totalDuration", Toast.LENGTH_SHORT)
                .show()
//            startTime = null
//            endTime = null
        }

    var mContext: Context? = null
    var mWebView: WebView? = null
    var mUserName:String = ""

    val totalDuration: Duration
        get() = Duration.between(startTime, endTime)
    var currentTask = "task1"
    set(value) {
        field = value
        reload_blocks()
        mWebView?.evaluateJavascript("current_task=$currentTask"){}
    }
    var taskBlocks = mutableMapOf(
        "task1" to "",
        "task2" to "",
        "task3" to "",
        "free" to ""
    )

//    var codeGen = """
//
//    """.trimIndent()
//    set(value) {
//        field = value
//        mWebView?.evaluateJavascript(value){}
//    }

    var taskXmls = mutableMapOf(
        "task1" to "",
        "task2" to "",
        "task3" to "",
        "free" to ""
    )

    var taskCodes = mutableMapOf(
        "task1" to "",
        "task2" to "",
        "task3" to "",
        "free" to ""
    )

    var taskTimeConsumpation = mutableMapOf(
        "task1" to "",
        "task2" to "",
        "task3" to "",
        "free" to ""
    )

    internal fun downloadAllBlocks() {
        taskBlocks.forEach { task ->
            NetworkManager.downloadBlockConfig(task.key) {
                taskBlocks[task.key] = it
            }
        }
    }


    fun reload_blocks() {
        val blocks = taskBlocks[currentTask]
        mWebView?.evaluateJavascript("var custom_blocks = $blocks;"){

        }
        mWebView?.evaluateJavascript("Blockly.defineBlocksWithJsonArray(custom_blocks)"){

        }
    }

    fun showCodeGen(pythonCode:String){
        val toast = Toast(mContext)
        toast.setText(pythonCode)
        toast.duration = Toast.LENGTH_SHORT
        Handler().postDelayed({ toast.cancel() },1000)
        toast.show()
    }
}