import { Header, SubHeader } from "../../components/utils";
import Navbar from "../../layouts/header";
import Footer from "../../layouts/footer";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { PsikotesGuide, PsikotesGuideItem } from "./psikotes.component";

const Psikotes = () => {
  const navigate = useNavigate();
  const startAttempts = () => {
    navigate("attempts");
  }
  return (
    <>
      <Navbar shadow={false} />
      <Container style={{ marginTop: "100px" }} className="psikotes-header">
        <Header
          title={"Tes kepribadian MBTI: Kenali dirimu lebih jauh!"}
          description={
            "Tes MBTI ini bertujuan untuk membantu memahami keunikan kepribadian yang ada pada dirimu. Ketahuilah preferensi dan kecenderungan psikologimu sekarang!"
          }
          className={"text-center"}
        />
      </Container>

      <Container style={{marginTop: "100px"}}>
        <SubHeader title={"Baca panduan pengisiannya dulu yuk!"} className="text-start" />
        
        <PsikotesGuide>
          <PsikotesGuideItem id={1} text={"Di tes ini tidak ada jawaban benar atau salah. Jadi isilah dengan jujur sesuai kepribadianmu."} />
          <PsikotesGuideItem id={2} text={"Tes ini tidak ada batasan waktu pengerjaan."} />
          <PsikotesGuideItem id={3} text={"Kerjakan dengan fokus, cari tempat yang kondusif dan bikin kamu nyaman."} />
          <PsikotesGuideItem id={4} text={"Seluruh proses tes dan jawaban akan hilang kalau kamu keluar di tengah tes."} />
          <PsikotesGuideItem id={5} text={"Isilah semua pertanyaan dengan lengkap."} />
        </PsikotesGuide>
        
        <h5 className="mt-4">Selamat memulai tes!</h5>
        <Button onClick={startAttempts} variant="primary" className="mt-5 fw-bold rounded-pill px-5 py-3">Mulai</Button>
      </Container>
      
      <Container style={{marginTop: "150px"}}>
        <Footer />
      </Container>
    </>
  );
};

export default Psikotes;