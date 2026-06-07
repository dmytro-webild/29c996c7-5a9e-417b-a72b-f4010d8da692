"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Leaf, Heart, DollarSign, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmall"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "Shop",          id: "#products"},
        {
          name: "Reviews",          id: "#testimonials"},
        {
          name: "FAQs",          id: "#faqs"},
      ]}
      brandName="Thrift Haven"
      button={{
        text: "Hubungi WhatsApp",        href: "https://wa.me/62895328176185"}}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient"}}
      title="Tampil Keren Tanpa Menguras Kantong. Temukan Pakaian Thrift Terbaikmu!"
      description="Selami koleksi pilihan barang pre-loved kami. Temukan item unik, harga terjangkau, dan bantu wujudkan planet yang lebih hijau—semua ada di satu tempat. Ekspresikan dirimu, dengan mudah."
      buttons={[
        {
          text: "Hubungi WhatsApp",          href: "https://wa.me/62895328176185"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-posing-outdoors_23-2148774639.jpg",          imageAlt: "Gen-Z enjoying thrift shopping"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-girl-wearing-trendy-clothes-with-wireless-headphones-holding-takeaway-coffee-outside-cafe_613910-17706.jpg",          imageAlt: "Stylish young woman in vintage denim jacket"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-fashion-shoting_23-2148885689.jpg",          imageAlt: "Group of friends browsing sustainable fashion"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-african-american-man-white-shirt-colored-pants-with-hat-glasses-posed-outdoor-against-graffiti-wall-black-fashionable-model-boy_627829-4055.jpg",          imageAlt: "Young man in oversized graphic tee"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-bun-dressed-beige-sweater-dark-denim-pants-posing-cafe_197531-16922.jpg",          imageAlt: "Aesthetic thrift store interior"},
      ]}
      mediaAnimation="opacity"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Sustainable Style",          description: "Reduce your carbon footprint and embrace circular fashion. Every purchase supports a greener future.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-clothesline-fields_23-2148170148.jpg",          imageAlt: "Hands holding a green plant, symbolizing sustainability",          buttonIcon: Leaf,
        },
        {
          title: "Curated Collections",          description: "Our team hand-picks every item, ensuring quality and style. Find unique pieces you won't see anywhere else.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-man-sitting-antique-arm-chair-looking-magazine-clothes-shop_23-2148175638.jpg",          imageAlt: "Stylist carefully selecting vintage clothes",          buttonIcon: Heart,
        },
        {
          title: "Affordable Finds",          description: "Look good without breaking the bank. Premium quality at prices that make your wallet (and planet) happy.",          imageSrc: "http://img.b2bpic.net/free-photo/party-girl-with-yellow-color-effect_23-2147635310.jpg",          imageAlt: "Young person smiling with affordable fashion items",          buttonIcon: DollarSign,
        },
        {
          title: "Community & Connection",          description: "Join a vibrant community of like-minded fashion lovers. Share your style, get inspiration, and connect.",          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-beautiful-woman-blue-printed-dress-red-bag-sunglasses-fashionable-outfit-trendy-apparel-smiling-sitting-summer-accessories_285396-3822.jpg",          imageAlt: "Young stylish beautiful woman with red bag",          buttonIcon: Users,
        },
      ]}
      title="Why Thrift Haven?"
      description="More than just clothes, it's a movement. Discover the benefits of shopping sustainably and stylishly with us."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p-1",          name: "Vintage Patchwork Sweater",          price: "$35",          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-green-sweater-posing-outdoors_1157-30517.jpg",          imageAlt: "Vintage patchwork sweater"},
        {
          id: "p-2",          name: "High-Rise Mom Jeans",          price: "$28",          imageSrc: "http://img.b2bpic.net/free-photo/expressive-female-model-is-posing_344912-1662.jpg",          imageAlt: "High-rise mom jeans"},
        {
          id: "p-3",          name: "Retro Graphic Tee",          price: "$20",          imageSrc: "http://img.b2bpic.net/free-photo/bicycle-front-young-man-sitting-staircase-holding-disposable-coffee-cup_23-2148176552.jpg",          imageAlt: "Retro graphic tee"},
        {
          id: "p-4",          name: "Earth Tone Cargo Pants",          price: "$40",          imageSrc: "http://img.b2bpic.net/free-photo/view-beige-tone-colored-pants_23-2150773399.jpg",          imageAlt: "Earth tone cargo pants"},
        {
          id: "p-5",          name: "Boho Floral Maxi Dress",          price: "$45",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-working-as-clothing-designer_23-2150762224.jpg",          imageAlt: "Boho floral maxi dress"},
        {
          id: "p-6",          name: "Classic Vegan Leather Jacket",          price: "$60",          imageSrc: "http://img.b2bpic.net/free-photo/woman-model-demonstrating-winter-cloths_1303-16982.jpg",          imageAlt: "Classic vegan leather jacket"},
      ]}
      title="Our Featured Finds"
      description="Explore the freshest drops and timeless classics. Hand-picked just for you, ready to find their new home."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Our Mission: Fashion with a Conscience."},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/group-activists-friends-collecting-plastic-waste-beach-guys-show-thumb-up_1153-4483.jpg",          alt: "Young people actively participating in a clothing community"},
      ]}
      buttons={[
        {
          text: "Read Our Story",          href: "#"},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t-1",          name: "Zara H.",          role: "Student & Creator",          testimonial: "Thrift Haven totally changed my wardrobe game! I find the coolest, unique pieces that no one else has. Plus, it feels good to shop sustainably.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-listening-music_23-2148547541.jpg",          imageAlt: "Zara H."},
        {
          id: "t-2",          name: "Leo M.",          role: "Musician",          testimonial: "I love the vibe of Thrift Haven. It’s not just a store; it’s a treasure hunt. Always finding authentic vintage gear for my gigs.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-hipster-with-natural-makeup-short-haircut-enjoying-leisure-time-outdoors_158595-2715.jpg",          imageAlt: "Leo M."},
        {
          id: "t-3",          name: "Chloe S.",          role: "Fashion Enthusiast",          testimonial: "The curation here is incredible! Every piece feels hand-picked. It’s my go-to for affordable, stylish, and ethical fashion.",          imageSrc: "http://img.b2bpic.net/free-photo/fashion-woman-casual-summer-clothes_158538-10243.jpg",          imageAlt: "Chloe S."},
        {
          id: "t-4",          name: "Kai P.",          role: "Artist",          testimonial: "Finally, a place where I can express my individual style without contributing to fast fashion. Thrift Haven gets it!",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-portrait-redhead-non-binary-person_23-2148760593.jpg",          imageAlt: "Kai P."},
        {
          id: "t-5",          name: "Maya R.",          role: "Sustainability Advocate",          testimonial: "As someone passionate about the environment, I truly appreciate Thrift Haven's commitment. Great clothes, great mission.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-cheerful-africanamerican-girl-showing-thumbsup-support-like-agree-with-y_1258-138554.jpg",          imageAlt: "Maya R."},
      ]}
      title="What Our Style Squad Says"
      description="Hear from our community about their favorite finds and why they choose sustainable fashion."
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "How do you source your clothing?",          content: "We carefully hand-pick items from various local and ethical sources, ensuring each piece meets our quality and style standards before it ever reaches our store."},
        {
          id: "faq-2",          title: "What is your return policy?",          content: "Due to the unique, pre-loved nature of our items, all sales are final. We encourage you to review product descriptions and measurements carefully before purchasing."},
        {
          id: "faq-3",          title: "How do you ensure clothing quality?",          content: "Every item undergoes a thorough inspection for quality, cleanliness, and condition. We only sell items that are in excellent, wearable condition."},
        {
          id: "faq-4",          title: "Do you offer international shipping?",          content: "Currently, we only ship within [Your Country/Region]. We're working on expanding our reach to bring sustainable fashion to more people!"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-elderly-woman-working-laptop_23-2148419263.jpg"
      imageAlt="Person looking at FAQs on a laptop"
      mediaAnimation="opacity"
      mediaPosition="right"
      title="Got Questions? We've Got Answers."
      description="Find quick answers to common inquiries about shopping, shipping, and sustainability at Thrift Haven."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Join the Movement"
      title="Ready to Refresh Your Wardrobe?"
      description="Join thousands of Gen-Z trendsetters who are embracing sustainable style. Discover your next favorite piece today!"
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-women-taking-selfie-mall_23-2148385653.jpg"
      imageAlt="Group of young people having fun thrift shopping"
      mediaPosition="left"
      inputPlaceholder="Enter your email for updates"
      buttonText="Shop Now"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="http://img.b2bpic.net/free-photo/black-clothes-hangers-terracotta-background-with-copy-space-idea-sale-creative-shopping-concept-flat-lay-minimalistic-style-creative-layout-fashion-shop-sale-blog-banner_166373-1748.jpg"
      logoAlt="Thrift Haven Logo"
      logoText="Thrift Haven"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}