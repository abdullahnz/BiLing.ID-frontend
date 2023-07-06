import { Col,Image, Row } from "react-bootstrap";
import { Button } from "../../../components/button";

import { PageContainer } from "../components";

import {
  FormControl,
  FormDefault,
  FormInfo,
  FormPassword,
  FormRadio,
} from "../../../components/form"; 
import { Link } from "react-router-dom";

import { useState } from "react";

import { ProfileGroup, ProfileAddition, ProfileAdditionDropdown } from "./profile.component";


const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);

  const handleEditProfile = () => {
    setEditProfile((editProfile) => !editProfile);
  };

  const [formData, setFormData] = useState({
    fullname: "Arla Sifhana Putri",
    email: "arlasifhanap@gmail.com",
    phone: "081234567890",
    dateBirth: "2003-12-31",
    gender: "Perempuan",
    password: "***********",
  });

  const [currentData, setCurrentData] = useState({
    fullname: "Arla Sifhana Putri",
    email: "arlasifhanap@gmail.com",
    phone: "081234567890",
    dateBirth: "2003-12-31",
    gender: "Perempuan",
    password: "***********",
  });

  const updateProfile = () => {
    setCurrentData(() => {
      return formData;
    });
    setEditProfile((editProfile) => !editProfile);
  };

  const formDataHandler = (event) => {
    setFormData((formData) => {
      return {
        ...formData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const genderHandler = (event) => {
    console.log(event.target);
    setFormData((formData) => {
      return {
        ...formData,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <div>
      <PageContainer title="Profil">
        <div className="text-center py-4">
          <Image
            src="/assets/img/profile.png"
            roundedCircle
            width={130}
            className="border border-4 border-primary  p-2"
          />
        </div>
        <div>
          Email kamu belum terverifikasi, untuk verifikasi{" "}
          <Link to="#verif-email" className="fw-bold">
            klik disini!
          </Link>
        </div>

        <Row className="mt-5">
          <Col>
            <ProfileGroup label="Nama">
              {editProfile ? (
                <FormControl
                  name="fullname"
                  value={formData.fullname}
                  onChange={formDataHandler}
                />
              ) : (
                <FormInfo className="mt-1">{currentData.fullname}</FormInfo>
              )}
            </ProfileGroup>

            <ProfileGroup label="Tanggal lahir">
              {editProfile ? (
                <FormControl
                  name="dateBirth"
                  type="date"
                  value={formData.dateBirth}
                  onChange={formDataHandler}
                />
              ) : (
                <FormInfo className="mt-1">{currentData.dateBirth}</FormInfo>
              )}
            </ProfileGroup>

            <ProfileGroup label="Jenis kelamin">
              {editProfile ? (
                <FormRadio
                  name="gender"
                  selections={["Perempuan", "Laki-Laki"]}
                  onChange={genderHandler}
                />
              ) : (
                <FormInfo className="mt-1">{currentData.gender}</FormInfo>
              )}
            </ProfileGroup>
          </Col>
          <Col>
            <ProfileGroup label="Nomor whatsapp">
              {editProfile ? (
                <FormControl
                  name="phone"
                  value={formData.phone}
                  onChange={formDataHandler}
                />
              ) : (
                <FormInfo className="mt-1">{currentData.phone}</FormInfo>
              )}
            </ProfileGroup>

            <ProfileGroup label="Email">
              {editProfile ? (
                <FormControl
                  name="email"
                  value={formData.email}
                  onChange={formDataHandler}
                />
              ) : (
                <FormInfo className="mt-1">{currentData.email}</FormInfo>
              )}
            </ProfileGroup>

            <ProfileGroup label="Kata sandi">
              {editProfile ? (
                <FormPassword
                  name="password"
                  placeholder="Masukkan kata sandi baru"
                  onChange={formDataHandler}
                />
              ) : (
                <FormInfo className="mt-1">{"*".repeat(16)}</FormInfo>
              )}
            </ProfileGroup>
          </Col>
        </Row>

        <div className="text-end">
          {editProfile ? (
            <>
              <Button
                label="Batal"
                className="bg-white border-primary text-primary me-3"
                onClick={handleEditProfile}
              />
              <Button label="Simpan" onClick={updateProfile} />
            </>
          ) : (
            <Button label="Ubah Profile" onClick={handleEditProfile} />
          )}
        </div>
      </PageContainer>

      <PageContainer title="Profil lanjutan">
        <ProfileAddition>
          <ProfileAdditionDropdown label="Data diri" status="Belum terisi">
            <FormDefault
              label="Nama panggilan"
              placeholder="Masukkan nama panggilanmu"
            />
            <FormRadio
              name="kegiatan"
              label="Kegiatan utama saat ini?"
              selections={[
                "Bekerja",
                "Sekolah",
                "Kuliah",
                "Wiraswasta",
                "Tidak memiliki aktivitas/kegiatan utama",
              ]}
            />
            <FormDefault
              label="Dimana kamu melakukan kegiatan utama?"
              help="Contoh: Universitas Telkom"
              placeholder="Masukkan nama tempat"
            />
            <FormRadio
              name="pendapatan"
              label="Berapa pendapatan per bulan yang kamu dapatkan?"
              selections={[
                "< 3 juta",
                "3 - 5 juta",
                "5 - 10 juta",
                "10 - 15 juta",
                "> 15 juta",
                "Belum berpenghasilan",
                "Memilih tidak menjawab",
              ]}
            />
            <FormRadio
              name="agama"
              label="Agama"
              selections={[
                "Islam",
                "Kristen",
                "Katolik",
                "Hindu",
                "Budha",
                "Kong Hu Cu",
                "Memilih tidak menjawab",
              ]}
            />
            <FormDefault
              label="Domisili"
              placeholder="Masukkan domisili (temp)"
            />
            <FormRadio
              name="kawin"
              label="Status perkawinan"
              selections={[
                "Menikah",
                "Belum/Tidak menikah",
                "Cerai mati",
                "Cerai hidup",
                "Memilih tidak menjawab",
              ]}
            />
            <FormDefault
              label="Tahun menikah"
              help="Jika belum/tidak menikah, isi dengan “-”"
              placeholder="Masukkan tahun menikahmu"
            />
          </ProfileAdditionDropdown>

          <ProfileAdditionDropdown label="Data pendidikan" status="Belum terisi">
            <Button label="Tambah Pendidikan" />
          </ProfileAdditionDropdown>
        </ProfileAddition>

        <div className="text-end">
          <Button label="Simpan" />
        </div>
      </PageContainer>
    </div>
  );
};

export default Profile;
