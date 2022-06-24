package online.iamwz.vploniot.ui.task_manager

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.RecyclerView
import online.iamwz.vploniot.databinding.FragmentTaskSettingsBinding

/**
 * Fragment that demonstrates a responsive layout pattern where the format of the content
 * transforms depending on the size of the screen. Specifically this Fragment shows items in
 * the [RecyclerView] using LinearLayoutManager in a small screen
 * and shows items using GridLayoutManager in a large screen.
 */
class TaskSettingsFragment : Fragment() {

    private var _binding: FragmentTaskSettingsBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentTaskSettingsBinding.inflate(inflater, container, false)
        val root: View = binding.root
        val toggleButton = binding.toggleButton

        val btn_list = listOf(binding.btnTask1,
            binding.btnTask2,
            binding.btnTask3)
        toggleButton?.addOnButtonCheckedListener { group, checkedId, isChecked ->
            if (isChecked) {
                val taskIndex = btn_list.map { it.id }.indexOf(checkedId)
//                btn_list.filter { it.id != checkedId }.forEach { group.uncheck(it.id) }
                TaskManager.currentTask = "task${taskIndex+1}"
            }
        }

        binding.submitInfo.setOnClickListener {
            TaskManager.mUserName = binding.nameText?.text.toString()
        }

        val upload_btn = binding.uploadDescriptionButton.setOnClickListener {

        }
        return root
    }

    override fun onStart() {
        super.onStart()
        val btnList = listOf(binding.btnTask1,
            binding.btnTask2,
            binding.btnTask3)
        val toggleButton = binding.toggleButton
        toggleButton.check(btnList[TaskManager.currentTask.last().digitToInt()-1].id)

        binding.nameText?.setText(TaskManager.mUserName)
    }

    override fun onResume() {
        super.onResume()
    }
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}