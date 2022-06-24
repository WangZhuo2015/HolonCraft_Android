package online.iamwz.vploniot

import com.github.kittinunf.fuel.core.FuelManager
import com.github.kittinunf.fuel.core.Method
import com.github.kittinunf.fuel.httpPost
import com.github.kittinunf.result.Result

object NetworkManager {
    private val deviceId = "device1"
    private val host: String
        get() = "http://192.168.31.55:80"
    private val getBlockUrl = "$host/api/load-blocks"
    private val uploadHolonDescUrl = "$host/api/upload-desc"



    fun uploadHolonDesc() {
        uploadHolonDescUrl
            .httpPost()
            .responseString { _, _, result ->
                print(result)
            }
    }

    internal fun downloadBlockConfig(
        taskIdentifier: String,
        callback: (json: String) -> Unit
    ) {
        when(taskIdentifier){
            "task1" -> callback("[${CustomBlocks.task1()}]")
            "task2" -> callback("[${CustomBlocks.task2()}]")
            "task3" -> callback("[${CustomBlocks.task3()}]")
        }

//        FuelManager
//            .instance
//            .request(
//                Method.GET, getBlockUrl,s
//                listOf(Pair("task", taskIdentifier))
//            )
//            .responseString { _, _, result ->
//                when (result) {
//                    is Result.Failure -> {
//                        val ex = result.getException()
//                        println(ex)
//
//                    }
//                    is Result.Success -> {
//                        val data = result.get()
//                        callback(data)
////                        TaskManager.taskBlocks.filter { it.key==taskIdentifier } = data
//                        println(data)
//                    }
//                }
//            }
    }
}