package online.iamwz.vploniot

import android.annotation.SuppressLint
import android.content.Context
import android.webkit.JavascriptInterface
import online.iamwz.vploniot.ui.task_manager.TaskManager
import java.time.Instant

class JSInterface(private val context: Context) {
    var mContext:Context? = null

    @SuppressLint("WrongConstant")
    @JavascriptInterface
    fun stopTimer(){
        TaskManager.endTime = Instant.now()
        //TODO:- send data to server
    }

    @JavascriptInterface
    fun startTimer(){
        //TODO:- send data to server
        TaskManager.startTime = Instant.now()
    }

    @JavascriptInterface
    fun saveBlocks(xml:String,code:String){
        TaskManager.taskXmls[TaskManager.currentTask] = xml
        TaskManager.taskCodes[TaskManager.currentTask] = code
        TaskManager.showCodeGen(code)
    }

//    @JavascriptInterface
//    fun showCodeGen(pythonCode:String){
//        TaskManager.showCodeGen(pythonCode)
//    }

}