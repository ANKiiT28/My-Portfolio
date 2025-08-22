export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  image: string;
  imageHint: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: 'land-price-prediction-system',
    title: 'Predicting the Future: Building a Land Price Prediction System',
    date: '2024-07-15',
    description: 'A detailed look into the machine learning pipeline I built to forecast land prices, from data preprocessing to model deployment.',
    content: `<p>Predicting land prices is a complex challenge with significant real-world implications. For this project, I engineered a complete machine learning model to accurately forecast land values. This wasn't just about training a model; it was about building a robust, modular pipeline for the entire process.</p>
    <h3>The Process:</h3>
    <ul>
      <li><strong>Data Preprocessing:</strong> The first step was to gather and clean the dataset. This involved handling missing values, encoding categorical features, and normalizing the data to prepare it for the model.</li>
      <li><strong>Model Training:</strong> I experimented with several regression algorithms to find the best fit for the data. The final model was trained on the preprocessed dataset, focusing on achieving the highest accuracy and lowest error rate.</li>
      <li><strong>Prediction & Evaluation:</strong> The system provides a simple interface to input new data points and receive a price prediction. I rigorously evaluated the model's performance using metrics like Mean Absolute Error (MAE) and R-squared score.</li>
    </ul>
    <p>This project was a deep dive into the practical application of machine learning. It significantly strengthened my skills in Python, data structures, and building end-to-end ML workflows, from raw data to actionable predictions.</p>`,
    image: '/Screenshot 2025-08-21 162809.png',
    imageHint: 'data analysis chart'
  },
  {
    slug: 'food-waste-management-system',
    title: 'Designing for Impact: A Food Waste Management System UI/UX',
    date: '2024-06-20',
    description: 'A case study on designing an intuitive mobile app in Figma to connect NGOs, donors, and farmers to combat food waste.',
    content: `<p>Food waste is a pressing global issue. To address this, I designed the UI/UX for a mobile application aimed at creating a seamless food distribution network. The goal was to build an intuitive platform that connects the key players: NGOs, donors, and farmers.</p>
    <p>Using Figma, I created a user-centric design that focused on simplicity and efficiency. The application allows donors to easily list surplus food, NGOs to find and claim donations, and farmers to offer their produce directly to organizations in need.</p>
    <h3>Key Design Features:</h3>
    <ul>
      <li><strong>Clear User Flows:</strong> I mapped out the user journeys for each type of user (donor, NGO, farmer) to ensure a logical and frictionless experience.</li>
      <li><strong>Real-time Inventory:</strong> The design includes a real-time dashboard for NGOs to see available food, preventing double-booking and ensuring timely pickups.</li>
      <li><strong>Direct Communication:</strong> A built-in messaging system facilitates communication between parties to coordinate logistics.</li>
    </ul>
    <p>This project was a powerful exercise in using design to solve a real-world problem. It demonstrates my ability to think critically about user needs and translate those insights into a clean, effective, and visually appealing mobile application design.</p>`,
    image: '/Screenshot 2024-07-11 193236.png',
    imageHint: 'mobile application interface'
  },
  {
    slug: 'farmer-sales-platform',
    title: 'Empowering Farmers with a Direct-to-Consumer Sales Platform',
    date: '2024-05-10',
    description: 'A UI/UX case study on creating a mobile app that empowers farmers by enabling them to sell produce directly to consumers.',
    content: `<p>Intermediaries in the agricultural supply chain often reduce the profitability for farmers. I designed a UI/UX for a mobile application that empowers farmers by providing a platform to sell their products directly to consumers.</p>
    <p>The core concept was to create a simple, trustworthy, and accessible marketplace. The design, created in Figma, focuses on showcasing the farmers' products beautifully and making the purchasing process as simple as possible for consumers.</p>
    <h3>Design Highlights:</h3>
    <ul>
      <li><strong>Farmer Profiles:</strong> Each farmer has a profile where they can share their story, building a connection with customers.</li>
      <li><strong>Product Listings:</strong> An easy-to-use interface for farmers to upload products, set prices, and manage inventory.</li>
      <li><strong>Secure Checkout:</strong> A streamlined and secure checkout process for consumers to purchase fresh produce with confidence.</li>
    </ul>
    <p>By cutting out the intermediaries, this platform design aims to increase farmers' profitability and provide consumers with access to fresher, locally sourced food. This project showcases my skills in creating user-centric e-commerce experiences and designing for social and economic impact.</p>`,
    image: '/Gemini_Generated_Image_kl1w5kkl1w5kkl1w.png',
    imageHint: 'farm produce market'
  },
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
