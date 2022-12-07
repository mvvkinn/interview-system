package com.example.qrscanner;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.PackageManager;

//import android.os.Bundle;
//import android.util.Log;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.util.SparseArray;
//import android.view.SurfaceHolder;
//import android.view.SurfaceView;
//import android.widget.TextView;

// import com.android.volley.RequestQueue;
import com.google.android.gms.vision.CameraSource;
import com.google.android.gms.vision.Detector;
import com.google.android.gms.vision.barcode.Barcode;
import com.google.android.gms.vision.barcode.BarcodeDetector;

//import java.io.IOException;
//import java.net.HttpURLConnection;
//import java.net.MalformedURLException;
//import java.net.URL;
import java.io.*;

import android.os.*;
import android.util.*;
import android.view.*;
import android.widget.*;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;


public class activity_scanner extends AppCompatActivity {

    TextView textView;
    private SurfaceView surfaceView;
    private CameraSource cameraSource;
    private BarcodeDetector barcodeDetector;
    String accessToken;
    String ResponseNum;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scanner);

        // OkHttp 클라이언트 객체 생성
        final OkHttpClient client = new OkHttpClient();
        String url = "http://localhost:3000/auth/MatchCheck";


        Button create_num = findViewById(R.id.inter_num_btn);
        textView = findViewById(R.id.qrcode_text);
        surfaceView = findViewById(R.id.surfaceView);
        barcodeDetector = new BarcodeDetector.Builder(getApplicationContext())
                .setBarcodeFormats(Barcode.QR_CODE).build();
        cameraSource = new CameraSource.Builder(getApplicationContext(), barcodeDetector)
                .setRequestedPreviewSize(640, 480).build();

        surfaceView.getHolder().addCallback(new SurfaceHolder.Callback() {
            @Override
            public void surfaceCreated(@NonNull SurfaceHolder surfaceHolder) {
                if (ActivityCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.CAMERA)
                        != PackageManager.PERMISSION_GRANTED){
                    return;
                }
                try {
                    cameraSource.start(surfaceHolder);
                }catch (IOException e){
                    e.printStackTrace();
                }
            }

            @Override
            public void surfaceChanged(@NonNull SurfaceHolder surfaceHolder, int i, int i1, int i2) {

            }

            @Override
            public void surfaceDestroyed(@NonNull SurfaceHolder surfaceHolder) {

            }
        });

        barcodeDetector.setProcessor(new Detector.Processor<Barcode>() {
            @Override
            public void release() {

            }

            @Override
            public void receiveDetections(@NonNull Detector.Detections<Barcode> detections) {
                final SparseArray<Barcode> qrcode = detections.getDetectedItems();
                if (qrcode.size() != 0){
                    boolean post = textView.post(new Runnable() {
                        @Override
                        public void run() {
                            textView.setText("인식 되었습니다.");
                            //textView.setText(qrcode.valueAt(0).displayValue);
                            accessToken = qrcode.valueAt(0).displayValue;
//                            finish();
                            Log.d("token",accessToken);
                            if (qrcode.valueAt(0).displayValue != null){

                                //Post method------------------------------------------------------------------------
                                try {
                                    // RequestBody 생성
                                    RequestBody requestBody = RequestBody.create(
                                            MediaType.parse("application/json; charset=utf-8"), accessToken);

                                    // Post 객체 생성
                                    Request.Builder builder = new Request.Builder().url(url)
                                            .addHeader("Password", "admin1234")
                                            .post(requestBody);
                                    Request request = builder.build();

                                    // 요청 전송
                                    Response response = client.newCall(request).execute();
                                    if (response.isSuccessful()) {
                                        // 응답 Body
                                        ResponseBody body = response.body();
                                        ResponseNum = body.string();
                                        if (body != null) {
                                            System.out.println("Response:" + body.string());
                                            Log.d("Response", ResponseNum);
                                        }
                                    } else
                                        System.err.println("Error Occurred");
                                    Log.d("Response", "NULL");
                                    return;
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }
                            }else{
                                finish();
                            }

                        }

                    });
                }

            }


        });

        create_num.setOnClickListener(new View.OnClickListener() {
            @SuppressLint("SetTextI18n")
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(activity_scanner.this, interviewNum.class);
                //intent로 면접번호 넘김 accessToken 수정필요
                intent.putExtra("INTERVIEW_NUM", ResponseNum);
                startActivity(intent);


            }});
    }
}