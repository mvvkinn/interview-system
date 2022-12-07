package com.example.qrscanner;

import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class interviewNum extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.interviewnum);
        TextView textView = findViewById(R.id.textView);

        String GETNUM = getIntent().getStringExtra("INTERVIEW_NUM");
        textView.setText(GETNUM);
        Log.i("INTERVIEW_NUM",GETNUM);




    }
}
