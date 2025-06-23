package com.example.electronicstore.entity;

public class Cart {

    private int s_id;
    private int quantity;
//    private int c_id;
//    private int p_id;


    public Cart() {
    }


    public Cart(int s_id, int quantity) {
        this.s_id = s_id;
        this.quantity = quantity;
    }


    public int getS_id() {
        return s_id;
    }

    public void setS_id(int s_id) {
        this.s_id = s_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }


    @Override
    public String toString() {
        return "Cart{" +
                "s_id=" + s_id +
                ", quantity=" + quantity +
                '}';
    }
}
