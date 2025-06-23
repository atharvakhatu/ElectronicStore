package com.example.electronicstore.activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.electronicstore.R;
import com.example.electronicstore.ThankYouActivity;

import org.w3c.dom.Text;

public class paymentActivity extends AppCompatActivity {
    Button btnOrder;
    TextView txtTotal,txtDeliveryCharges,txtPrice;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);

        btnOrder= findViewById(R.id.btnOrder);

        btnOrder.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getApplicationContext(), ThankYouActivity.class);
                startActivity(intent);
            }
        });
    }
}