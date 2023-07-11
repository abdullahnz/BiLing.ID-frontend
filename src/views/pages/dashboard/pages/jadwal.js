import { PageContainer, ItemList, ItemCardInfo } from "../components";
import { ReactComponent as CalendarIcon } from "../../../assets/icon/calendar-lg.svg";

const Jadwal = (props) => {
  const { user } = props;
  const settings = {
    color: {
      background: {
        success: "#EEF5FF",
        fail: "#FEF8E8",
      },
      text: {
        success: "text-primary",
        fail: "text-warning",
      },
    },
    button: {
      show: true,
      label: {
        success: "Lihat Diagnosa",
        fail: "Mulai Konseling",
      }
    },
    status: {
      success: "Lihat Diagnosa",
      fail: "Mulai Konseling"
    }
  }
  return (
    <PageContainer title="Jadwal">
      <ItemList
        icon={CalendarIcon}
        title={"Dr. Mitra, S.Psi."} 
        done={true}
        settings={settings}
      >
        <ItemCardInfo keys="Waktu" value="12/12/2021 12.00 WIB" />
      </ItemList>
      <ItemList
        icon={CalendarIcon}
        title={"Dr. Mitra, S.Psi."} 
        done={false}
        settings={settings}
      >
        <ItemCardInfo keys="Waktu" value="12/12/2021 12.00 WIB" />
      </ItemList>
      <ItemList
        icon={CalendarIcon}
        title={"Dr. Mitra, S.Psi."} 
        done={false}
        settings={settings}
      >
        <ItemCardInfo keys="Waktu" value="12/12/2021 12.00 WIB" />
      </ItemList>
    </PageContainer>
  );
};

export default Jadwal;
