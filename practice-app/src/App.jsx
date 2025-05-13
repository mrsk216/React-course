import './App.css';
import Feature from './Features';

function App({ name }) {
  const data = [
    {
      icon: 'https://frontdeskvisitor.com/assets/images/img/uploads/employee-management.png',
      title: 'Tracking Visitors in Real-time',
      description: 'Real-time visitor tracking has become an essential tool for businesses, event organizers, and service providers seeking to understand and optimize customer interactions. By monitoring visitor movements and behavior as they happen, organizations gain a precise view of engagement levels, helping them assess which areas or features draw the most attention. This real-time insight enables proactive decision-making: adjustments can be made instantly to streamline visitor flow, reduce congestion, and improve access to popular features or displays.'
    },
    {
      icon: 'https://frontdeskvisitor.com/assets/images/img/uploads/clock.png',
      title: 'Pre Booking Visitor',
      description: "Pre-booking a visitor refers to the process of scheduling and reserving an appointment, ticket, or access for a visitor in advance, often through an online platform or physical booking system. This concept is widely applied in various industries, including hospitality, events, tourism, and even office management, ensuring that visitor's experiences are smooth, organized, and personalized.",
      social: [
        {
          site: 'Facebook'
        }
      ]
    },
    {
      icon: 'https://frontdeskvisitor.com/assets/images/img/uploads/keys.png',
      title: 'Key Management',
      description: 'Key management refers to the process of managing cryptographic keys used to protect sensitive data and ensure secure communication within a system. It involves various stages, including key generation, storage, distribution, rotation, and eventual destruction. Proper key management is essential for maintaining the confidentiality, integrity, and authenticity of encrypted data. Without effective key management, even the most advanced encryption systems can be compromised.'
    },
    {
      icon: 'https://frontdeskvisitor.com/assets/images/img/uploads/delivery.png',
      title: 'Handling Deliveries',
      description: 'Handling deliveries is a crucial part of logistics and supply chain management, ensuring that products are safely and efficiently delivered to customers or businesses. It involves a series of steps from receiving an order to ensuring the timely and accurate arrival of goods at their intended destination. The process typically includes order verification, packaging, labeling, and choosing the appropriate transportation method based on factors like distance, urgency, and cost.'
    },
  ];
  
  return (
    <>
      <h1>Features</h1>
      <Feature farid={data} name={name} />
    </>
  )
}

export default App
