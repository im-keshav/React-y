import React from 'react'

import Cards from './components/Cards';

const App = () => {

  const jobs = [
  {
    companyLogo: "https://imgs.search.brave.com/Y_hU5wT4IYRa1yUzMC0a8yvx4jxxLEb8rXWL_DYiqZ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzg4LzkxLzkx/LzM2MF9GXzEyODg5/MTkxMDZfS3hMRG1U/ZmU3ZkZLRVBKMVQ3/WDFjRnVzRngzUUJF/ZTIuanBn",
    jobRole: "Frontend Developer",
    posted: "2 days ago",
    description: "Build responsive user interfaces using React.js and modern web tools.",
    tag1: "Full-time",
    tag2: "Junior Level",
  },
  {
    companyLogo: "https://imgs.search.brave.com/mJx8j-UsOYVuWD8YLxnWj94SByHnjBWZWJB9bakl7oM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/MTM0OTMwL2NvbnZl/cnNpb25zL18xNTEy/NTEyOTc5Xzk1Ml9p/bWItY2xpcGFydC0x/LWRlc2t0b3AuanBn",
    jobRole: "Backend Developer",
    posted: "5 days ago",
    description: "Develop server-side logic, APIs, and databases with Node.js and Express.",
    tag1: "Full-time",
    tag2: "Mid Level",
  },
  {
    companyLogo: "https://imgs.search.brave.com/Qz2YiMUznSN57alz08o1Y8nNUcBHdu3o1KoSptUNSlA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbmti/b3RkZXNpZ24uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzEwL2N1cnJlbnQt/bnZpZGlhLWxvZ28t/ZGVzaWduLTIwMDYt/MTAyNHg2ODMud2Vi/cA",
    jobRole: "UI/UX Designer",
    posted: "1 day ago",
    description: "Design clean, engaging, and user-friendly interfaces for apps and websites.",
    tag1: "Part-time",
    tag2: "Senior Level",
  },
  {
    companyLogo: "https://cdn.worldvectorlogo.com/logos/microsoft-6.svg",
    jobRole: "Data Analyst",
    posted: "3 days ago",
    description: "Analyze data, create reports, and provide insights for business decisions.",
    tag1: "Full-time",
    tag2: "Mid Level",
  },
  {
    companyLogo: "https://cdn.worldvectorlogo.com/logos/apple-11.svg",
    jobRole: "Mobile App Developer",
    posted: "6 days ago",
    description: "Develop and maintain cross-platform mobile apps with React Native.",
    tag1: "Full-time",
    tag2: "Junior Level",
  },
  {
    companyLogo: "https://imgs.search.brave.com/v4CnDEMT88rhzu-13UVRNSOqti4obr3okcvPAtJDZxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNkLzY2/L2Y0LzNkNjZmNGEy/ZGI3MTUyZDQ3NTQy/MTQ4NGYyNzRiYWVl/LmpwZw",
    jobRole: "Machine Learning Engineer",
    posted: "1 week ago",
    description: "Build and optimize ML models for real-world data-driven solutions.",
    tag1: "Full-time",
    tag2: "Senior Level",
  },
  {
    companyLogo: "https://cdn.worldvectorlogo.com/logos/medium-1.svg",
    jobRole: "Content Writer",
    posted: "4 days ago",
    description: "Write engaging and SEO-optimized content for blogs and websites.",
    tag1: "Part-time",
    tag2: "Junior Level",
  },
  {
    companyLogo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    jobRole: "DevOps Engineer",
    posted: "2 weeks ago",
    description: "Automate deployment and manage CI/CD pipelines for scalability.",
    tag1: "Full-time",
    tag2: "Mid Level",
  },
  {
    companyLogo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
    jobRole: "Cloud Architect",
    posted: "5 days ago",
    description: "Design secure and scalable cloud solutions using AWS or Azure.",
    tag1: "Full-time",
    tag2: "Senior Level",
  },
  {
    companyLogo: "https://cdn.worldvectorlogo.com/logos/tesla-motors.svg",
    jobRole: "QA Tester",
    posted: "3 days ago",
    description: "Test applications, identify bugs, and ensure overall product quality.",
    tag1: "Part-time",
    tag2: "Junior Level",
  }
];


  return (
    
      <div className="parent">
      {jobs.map((el,index)=>(
        <Cards 
        companyLogo={el.companyLogo}
        jobRole={el.jobRole} 
        posted={el.posted}
        description={el.description}
        tag1={el.tag1}
        tag2={el.tag2}        
        />
      ))}
      </div>

  )
}

export default App