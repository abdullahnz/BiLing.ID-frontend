import { PageContainer, ItemList, ItemCardInfo } from "../components";
import { ReactComponent as CalendarIcon } from "../../../assets/icon/calendar-lg.svg";

const Riwayat = (props) => {
  // const { user } = props;

  const settings = {
    color: {
      background: {
        success: "#EEF5FF",
        fail: "#FFEFEF",
      },
      text: {
        success: "text-primary",
        fail: "text-danger",
      },
    },
    button: {
      show: false
    },
    status: {
      success: "Berhasil",
      fail: "Gagal"
    }
  }


  return (
    <PageContainer title="Riwayat">
      <ItemList
        icon={CalendarIcon}
        title="Tes kepribadian MBTI"
        done={true}
        settings={settings}
      >
        <ItemCardInfo keys="Tanggal tes" value="12/12/2021" />
      </ItemList>

      <ItemList
        icon={CalendarIcon}
        title="Tes kepribadian MBTI"
        done={false}
        settings={settings}
      >
        <ItemCardInfo keys="Tanggal tes" value="12/12/2021" />
      </ItemList>

      <ItemList
        icon={CalendarIcon}
        title="Tes kepribadian MBTI"
        done={false}
        settings={settings}
      >
        <ItemCardInfo keys="Tanggal tes" value="12/12/2021" />
      </ItemList>
    </PageContainer>
  );
};

export default Riwayat;
