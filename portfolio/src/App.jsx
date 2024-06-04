import { useState } from 'react'
import "./App.css"
import NavComponent from './components/NavComponent'
import HelloComponent from './components/HelloComponent'
import AboutComponent from './components/AboutComponent'
import SkillComponent from './components/SkillComponent'
import ResultComponent from './components/ResultComponent'
import PersonalComponent from './components/PersonalComponent'
import ContactComponent from './components/ContactComponent'
function App() {
  const [count, setCount] = useState(0)
  const downloadFile = () => {
    const fileUrl = 'https://rad-druid-5cca96.netlify.app/resume_suwit.pdf'; // เปลี่ยน URL ให้เป็น URL ของไฟล์ PDF จริง
    const filename = 'resume_suwit.pdf';

    // สร้างลิงก์ชั่วคราวสำหรับดาวน์โหลดไฟล์
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;

    // คลิกที่ลิงก์เพื่อดาวน์โหลดไฟล์
    document.body.appendChild(link); // เพิ่มลิงก์ลงใน DOM
    link.click();
    document.body.removeChild(link); // ลบลิงก์ออกจาก DOM หลังดาวน์โหลดเสร็จ
  };

  return (
    <>
      <NavComponent></NavComponent>
      <div className="container" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
        <HelloComponent downloadFile={downloadFile}></HelloComponent>
        <AboutComponent></AboutComponent>
        <PersonalComponent></PersonalComponent>
        <SkillComponent></SkillComponent>
        <ResultComponent></ResultComponent>
        <ContactComponent></ContactComponent>
      </div>
    </>
  )
}

export default App
