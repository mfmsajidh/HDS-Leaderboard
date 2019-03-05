package com.github.akassharjun.hotdogshowdown

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import butterknife.ButterKnife
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        ButterKnife.bind(this)

        mAddHotdog.setOnClickListener {
            var hotdogsEaten = Integer.parseInt(mNumberOfHotdogs.text.toString())
            hotdogsEaten++
            if (isAmountValid(hotdogsEaten)) {
                mNumberOfHotdogs!!.text = hotdogsEaten.toString()
            } else {
                Toast.makeText(this, "Limit reached!", Toast.LENGTH_SHORT).show()
            }
        }

        mRemoveHotdog.setOnClickListener {
            var hotdogsEaten = Integer.parseInt(mNumberOfHotdogs.text.toString())
            hotdogsEaten--
            if (isAmountValid(hotdogsEaten)) {
                mNumberOfHotdogs!!.text = hotdogsEaten.toString()
            } else {
                Toast.makeText(this, "There are no hotdogs to be removed!", Toast.LENGTH_SHORT).show()
            }
        }

        mReset.setOnClickListener { mNumberOfHotdogs.text = "0" }
    }

    private fun isAmountValid(hotdogsEaten: Int): Boolean {
        return hotdogsEaten > -1 && hotdogsEaten < 21
    }
}

