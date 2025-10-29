import React from "react";

import Card from "./components/Card";

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/kcwUNFQXnhfIN8R_IcdMTWqvnE5qdZmvcIxvLigMHK4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
    companyName: "Google",
    postedDate: "5 days ago",
    post: "Front-End Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/FpnyRNRoovwDAwTfn4Un-es4uQ_6nByUIFalpA3R9EE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMTg2/MC8xNjM3NS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzE2Mzc1NzYz/Mi1zdG9jay1waG90/by1hbWF6b24tbG9n/by1vbi1hLXdoaXRl/LmpwZw",
    companyName: "Amazon",
    postedDate: "2 weeks ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/_612-UWfjwkZn2U22V-Wc9DSk2A2NyNS_gZdDiitTds/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I2LzZk/L2Q0L2I2NmRkNGY0/MDY0ZTUzYmNlNzQ4/ZWZhMzQ4ZDcwMTEw/LmpwZw",
    companyName: "Apple",
    postedDate: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/sMhNAjAFln4Dox-dr40W1uBdEj-8ZFLdHLweT3xJeds/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/NDY0NTA2OC96aC8l/RTclODUlQTclRTcl/ODklODcvdGhlLWxv/Z28tZm9yLW1ldGEt/aXMtc2Vlbi1vbi1h/LXNpZ24tYXQtdGhl/LWNvbXBhbnlzLWNv/cnBvcmF0ZS1oZWFk/cXVhcnRlcnMtbG9j/YXRpb24taW4tbWVu/bG8uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTdTeWhwUUlm/Q1VGNGxBOWVGNGVn/OEpGb2lneE12bUxO/U0ZpdVVaLXozNDQ9",
    companyName: "Meta",
    postedDate: "1 month ago",
    post: "Front-End Developer (React)",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/BRsxMxT3bq8AZ6u1MxE36rcotJAmgwO1bhCFDfkSUvc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZXNp/Z25icm8uY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzL05l/dGZsaXhfSWNvbi5w/bmc",
    companyName: "Netflix",
    postedDate: "1 week ago",
    post: "Full Stack Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/4Mu_1h83Sxg_n_CqwmfulbmbBJ1NzO0pp8p7JWsXe9E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IyL2Q5/LzA2L2IyZDkwNmM0/YjkwNzY4YjYzZGIx/MDc4Y2YzNjVjYTlm/LmpwZw",
    companyName: "Microsoft",
    postedDate: "4 days ago",
    post: "Angular Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/mm_jJhuUv5bnfY7x7skEOybMnjlLeO1IigcNSk-reTA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzQwLzI0LzQ5/LzM2MF9GXzU0MDI0/NDk4OV9uNENRWE1T/bFE0ODVLSkhqd2Ez/ajVZWmRBQVNuYWFo/cS5qcGc",
    companyName: "Tesla",
    postedDate: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/K8iD2FyOj2nFrAM1WSWRQfjFCp2Y76dIruINC21OlgA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk1Lzkz/Lzk4Lzk1OTM5ODYy/MWRmZDIyNDc5OGE4/MGMyMzdhOTc0ZTEz/LmpwZw",
    companyName: "Adobe",
    postedDate: "6 days ago",
    post: "Frontend Intern",
    tag1: "Part-time",
    tag2: "Internship",
    pay: "$30/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/XTwf9yFxi8Lxjsxgss8HjMDMRf6bYt0IM8nvGHaXQxA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NWNhZmVhZTBkNjJk/OWU0MTYzZDE1NDUv/Njg2ZDNjMjZmY2U1/ZDA1MzJhYjQyMGEy/X1NjcmVlbnNob3Ql/MjAyMDI1LTA3LTA4/JTIwMjEwNzAxLmF2/aWY",
    companyName: "NVIDIA",
    postedDate: "2 weeks ago",
    post: "Web Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://imgs.search.brave.com/UBVEcAfIlUYC3wJUKvQ1HHfjj2zSL9-vRzqDJ6T-sxY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE4LzFk/LzljLzE4MWQ5YzY5/MDVhMGE3MzA1ODgy/ODdjNjIwZThjZDFi/LmpwZw",
    companyName: "IBM",
    postedDate: "5 days ago",
    post: "Software Engineer (AI Tools)",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Chennai, India",
  },
];

  return (
    <div className="parent">
     {jobOpenings.map((el,idx)=> {
      return <div key={idx}>
        <Card  Logo={el.brandLogo} companyName={el.companyName} 
      postedDate={el.postedDate} post={el.post} tag1={el.tag1} tag2={el.tag2}
      pay={el.pay} location={el.location}/>
      </div>
      
     })}
   
    
    </div>
  );
};

export default App;
