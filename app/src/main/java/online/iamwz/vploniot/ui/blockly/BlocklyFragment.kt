package online.iamwz.vploniot.ui.blockly

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import online.iamwz.vploniot.databinding.FragmentBlocklyBinding

class BlocklyFragment : Fragment() {

    private lateinit var blocklyViewModel: BlocklyViewModel
    private var _binding: FragmentBlocklyBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        blocklyViewModel =
            ViewModelProvider(this).get(BlocklyViewModel::class.java)

        _binding = FragmentBlocklyBinding.inflate(inflater, container, false)
        val root: View = binding.root

        val webView = binding.blocklyWebview
//        val textView: TextView = binding.textReflow
//        blocklyViewModel.text.observe(viewLifecycleOwner, Observer {
//            textView.text = it
//        })
        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}