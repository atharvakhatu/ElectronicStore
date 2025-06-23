package com.example.electronicstore.entity;

public class Product {

    private int p_id;
    private String name;
    private String description;
    private String price;
    private String image;
    private int t_id;

    public Product() {
    }

    public Product(int p_id, String name, String description, String price, String image, int t_id) {
        this.p_id = p_id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.t_id = t_id;
    }

    public int getT_id() {
        return t_id;
    }

    public void setT_id(int t_id) {
        this.t_id = t_id;
    }

    public int getP_id() {
        return p_id;
    }

    public void setP_id(int p_id) {
        this.p_id = p_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    @Override
    public String toString() {
        return "Product{" +
                "p_id=" + p_id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price='" + price + '\'' +
                ", image='" + image + '\'' +
                ", t_id=" + t_id +
                '}';
    }
}

