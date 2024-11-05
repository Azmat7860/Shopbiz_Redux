import React from "react";
import { ProductCard } from "../components";
import earbuds from "../assets/images/earbuds.webp";
import speaker from "../assets/images/blutooth_speaker.webp";
import mouse from "../assets/images/gaming_mouse.webp";
import keyboard from "../assets/images/mechanical_keyboard.webp";
import laptopStand from "../assets/images/laptopstand.webp";
import partableCharger from "../assets/images/portable_charger.webp";
import smartphoneCase from "../assets/images/smartphone_case.webp";
import smartWatch from "../assets/images/smartwatch.webp";
import usbCHub from "../assets/images/usb_c_hub.webp";
import fitnessTracker from "../assets/images/fitness_tracker.webp";

export const Home = () => {
  const products = [
    {
      id: 1,
      name: "Earbuds",
      price: 49.99,
      inStock: true,
      image: earbuds,
    },
    {
      id: 2,
      name: "SmartWatch",
      price: 129.99,
      inStock: true,
      image: smartWatch,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 29.99,
      inStock: false,
      image: speaker,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 19.99,
      inStock: true,
      image: mouse,
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 79.99,
      inStock: true,
      image: keyboard,
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 34.99,
      inStock: false,
      image: laptopStand,
    },
    {
      id: 7,
      name: "USB-C Hub",
      price: 24.99,
      inStock: true,
      image: usbCHub,
    },
    {
      id: 8,
      name: "Portable Charger",
      price: 39.99,
      inStock: true,
      image: partableCharger,
    },
    {
      id: 9,
      name: "SmartPhone Case",
      price: 89.99,
      inStock: false,
      image: smartphoneCase,
    },
    {
      id: 10,
      name: "Fitness Tracker",
      price: 59.99,
      inStock: true,
      image: fitnessTracker,
    },
  ];

  return (
    <main className="mx-auto p-6 bg-gray-100">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};
