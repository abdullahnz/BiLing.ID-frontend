import { PageContainer, ItemList } from "../components";
import { ReactComponent as CalendarIcon } from "../../../assets/icon/calendar-lg.svg";

const Jadwal = () => {
  return (
    <PageContainer title="Jadwal">
      <ItemList icon={CalendarIcon} title="Dr. xxx, S.Psi." keys="Waktu" value="12/12/2021 12.00 WIB" done={true} />
      <ItemList icon={CalendarIcon} title="Dr. xxx, S.Psi." keys="Waktu" value="12/12/2021 12.00 WIB" done={true} />
      <ItemList icon={CalendarIcon} title="Dr. xxx, S.Psi." keys="Waktu" value="12/12/2021 12.00 WIB" done={true} />
      <ItemList icon={CalendarIcon} title="Dr. xxx, S.Psi." keys="Waktu" value="12/12/2021 12.00 WIB" done={true} />
      <ItemList icon={CalendarIcon} title="Dr. xxx, S.Psi." keys="Waktu" value="12/12/2021 12.00 WIB" done={false} />
    </PageContainer>
  );
};

export default Jadwal;
