package online.iamwz.vploniot.ui.settings

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import online.iamwz.vploniot.databinding.FragmentResultBinding
import online.iamwz.vploniot.ui.task_manager.TaskManager

class ResultFragment : Fragment() {

    private lateinit var settingsViewModel: SettingsViewModel
    private var _binding: FragmentResultBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    @SuppressLint("SetTextI18n")
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        settingsViewModel =
            ViewModelProvider(this).get(SettingsViewModel::class.java)

        _binding = FragmentResultBinding.inflate(inflater, container, false)
        val root: View = binding.root

        val textXmlView: TextView = binding.textXml
        textXmlView.text = TaskManager.taskXmls[TaskManager.currentTask]
        binding.textCode.text = "#${TaskManager.currentTask} takes " +
            TaskManager.taskTimeConsumpation[TaskManager.currentTask] +
                "\n\n" +
                TaskManager.taskCodes[TaskManager.currentTask]

        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}