import { Col, Image, Row } from "react-bootstrap";
import { Button } from "../../../components/button";

import { ProfileEditEmail, ProfileEditPassword } from "./profile.component";

import { PageContainer } from "../components";
import { InputGroup } from "react-bootstrap";
import {
  FormControl,
  FormDefault,
  FormInfo,
  FormRadio,
} from "../../../components/form";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { ProfileGroup } from "./profile.component";

import { ToastHelper } from "../../../components/toast";
import { config } from "../../../../global/config";
import { CameraFill } from "react-bootstrap-icons";
import styles from "../styles/style.module.css";

const Profile = (props) => {
  const [editProfile, setEditProfile] = useState(false);
  const [showEditEmail, setShowEditEmail] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);

  const [formData, setFormData] = useState({});

  const profilePhotoRef = useRef();

  // useEffect(() => {
  //   console.log(profilePhotoRef.current.files);
  // }, [profilePhotoRef.current])

  const profilePhotoRefHandler = () => {
    profilePhotoRef.current.click();
    console.log(profilePhotoRef.current.files[0]);
  };

  useEffect(() => {
    setFormData(() => {
      return {
        ...props.user,
        phone: props.user.phone || "",
        profile_photo: "",
      };
    });
  }, [props.user]);

  const editProfileShowHandler = () => {
    setEditProfile((editProfile) => !editProfile);
  };

  const updateProfileHandler = async () => {
    const status = await props.updateProfileHandler(formData);
    if (status) setEditProfile(() => false);
  };

  const updateEmailHandler = async (formData) => {
    console.log(formData);
    const status = await props.updateEmailHandler(formData);
    if (status) setShowEditEmail(() => false);
  };

  const updatePasswordHandler = async (formData) => {
    const status = await props.updatePasswordHandler(formData);
    if (status) setShowEditPassword(() => false);
  };

  const formDataFillHandler = (event) => {
    setFormData((formData) => {
      const data = {
        ...formData,
        [event.target.name]: event.target.value,
      };
      return data;
    });
  };

  const fileUploadHandler = () => {
    setFormData((formData) => {
      const data = {
        ...formData,
        profile_photo: profilePhotoRef.current.files[0],
      };
      console.log(data)
      return data;
    });
  }


  if (showEditEmail || showEditPassword) {
    return (
      <>
        <ToastHelper />
        <PageContainer title={showEditEmail ? "Ubah Email" : "Ubah Password"}>
          {showEditEmail && (
            <ProfileEditEmail
              user={props.user}
              updateEmailHandler={updateEmailHandler}
              hide={() => setShowEditEmail(false)}
            />
          )}
          {showEditPassword && (
            <ProfileEditPassword
              user={props.user}
              updatePasswordHandler={updatePasswordHandler}
              hide={() => setShowEditPassword(false)}
            />
          )}
        </PageContainer>
      </>
    );
  }

  return (
    <div>
      <ToastHelper />
      <PageContainer title="Profil">
        <div className="text-center py-4 position-relative d-flex justify-content-center">
          <Image
            src={
              props.user.profile_photo
                ? `${config.api.base}${props.user.profile_photo}`
                : "/assets/img/profile.png"
            }
            style={{ objectFit: "cover" }}
            roundedCircle
            width={130}
            height={130}
            className="border border-4 border-primary p-2"
          />
          {editProfile && (
            <div
              className={`${styles.fileUploadButton} p-2 bg-primary`}
              onClick={profilePhotoRefHandler}
            >
              <CameraFill size={20} />
            </div>
          )}
        </div>

        <div className="d-none">
          <input
            type="file"
            name="profile_photo"
            ref={profilePhotoRef}
            onChange={fileUploadHandler}
          />
        </div>

        {editProfile && (
          <div
            className="text-center my-4"
            style={{
              color: "#979797",
            }}
          >
            <span>
              Ukuran gambar: Square(1:1), maksimal 1 MB
              <br />
              Format gambar : JPG atau PNG
            </span>
          </div>
        )}
        <span>
          Email kamu belum terverifikasi, untuk verifikasi{" "}
          <Link to="#verif-email" className="fw-bold text-decoration-none">
            klik disini!
          </Link>
        </span>

        <Row className="mt-5">
          <Col>
            <ProfileGroup label="Nama">
              {editProfile ? (
                <FormDefault
                  name="fullname"
                  type="text"
                  value={formData.fullname}
                  onChange={formDataFillHandler}
                />
              ) : (
                <FormInfo className="mt-1">{props.user.fullname}</FormInfo>
              )}
            </ProfileGroup>

            <ProfileGroup label="Tanggal lahir">
              {editProfile ? (
                <FormDefault
                  name="date_of_birth"
                  type="date"
                  value={formData.date_of_birth}
                  onChange={formDataFillHandler}
                />
              ) : (
                <FormInfo className="mt-1">
                  {props.user.date_of_birth || "-"}
                </FormInfo>
              )}
            </ProfileGroup>

            <ProfileGroup label="Jenis kelamin">
              {editProfile ? (
                <FormRadio
                  name="gender"
                  selections={["male", "female"]}
                  onChange={formDataFillHandler}
                  selected={formData.gender}
                />
              ) : (
                <FormInfo className="mt-1">{props.user.gender}</FormInfo>
              )}
            </ProfileGroup>
          </Col>
          <Col>
            <ProfileGroup label="Nomor whatsapp">
              {editProfile ? (
                <FormDefault
                  name="phone"
                  type="text"
                  value={formData.phone ? formData.phone : ""}
                  placeholder={formData.phone ? "" : "Masukkan nomor hp anda"}
                  onChange={formDataFillHandler}
                />
              ) : (
                <FormInfo className="mt-1">{props.user.phone || "-"}</FormInfo>
              )}
            </ProfileGroup>

            <ProfileGroup label="Email">
              {editProfile ? (
                <InputGroup>
                  <FormControl
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={formDataFillHandler}
                    disabled
                  />
                  <Button
                    label="Ubah"
                    className="ms-2 bg-white border text-dark"
                    onClick={() => setShowEditEmail(true)}
                  />
                </InputGroup>
              ) : (
                <FormInfo className="mt-1">{props.user.email}</FormInfo>
              )}
            </ProfileGroup>

            <ProfileGroup label="Kata Sandi">
              {editProfile ? (
                <InputGroup>
                  <FormControl
                    name="password"
                    type="password"
                    value="********"
                    onChange={formDataFillHandler}
                    disabled
                  />
                  <Button
                    label="Ubah"
                    className="ms-2 bg-white border text-dark"
                    onClick={() => setShowEditPassword(true)}
                  />
                </InputGroup>
              ) : (
                <FormInfo className="mt-1">********</FormInfo>
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
                onClick={editProfileShowHandler}
              />
              <Button label="Simpan" onClick={updateProfileHandler} />
            </>
          ) : (
            <Button label="Ubah Profile" onClick={editProfileShowHandler} />
          )}
        </div>
      </PageContainer>
      {/* 
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

          <ProfileAdditionDropdown
            label="Data pendidikan"
            status="Belum terisi"
          >
            <Button label="Tambah Pendidikan" className="mb-4" />
            <InputGroup className="gap-3">
              <FormControl name="jenjang" type="text" placeholder="Jenjang" onChange={formDataFillHandler} /> 
              <FormControl name="sekolah" type="text" placeholder="Sekolah" onChange={formDataFillHandler} /> 
              <FormControl name="kota" type="text" placeholder="Kota/Kab." onChange={formDataFillHandler} /> 
              <FormControl name="tahunMasuk" type="text" placeholder="Thn. Masuk" onChange={formDataFillHandler} /> 
              <FormControl name="tahunLulus" type="text" placeholder="Thn. Lulus" onChange={formDataFillHandler} /> 
            </InputGroup>
          </ProfileAdditionDropdown>
        </ProfileAddition>

        <div className="text-end">
          <Button label="Simpan" />
        </div>
      </PageContainer> */}
    </div>
  );
};

export default Profile;
