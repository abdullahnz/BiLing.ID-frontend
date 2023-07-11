import { PageContainer, ItemList, ItemCardInfo } from "../components";
import { ReactComponent as NoteIcon } from "../../../assets/icon/note-lg.svg";

const Psikotes = (props) => {
  // const { user } = props;
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
        success: "Lihat Hasil",
        fail: "Mulai Psikotes",
      }
    },
    status: {
      success: "Telah dikerjakan",
      fail: "Belum dikerjakan"
    }
  }
  return (
    <PageContainer title="Psikotes">
      <ItemList
        icon={NoteIcon}
        title="Psikotes 1" 
        done={true}
        settings={settings}
      >
        <ItemCardInfo keys="Tanggal pembayaran" value="12/12/2021" />
      </ItemList>

      <ItemList
        icon={NoteIcon}
        title="Psikotes 2" 
        done={true}
        settings={settings}
      >
        <ItemCardInfo keys="Tanggal pembayaran" value="12/12/2021" />
      </ItemList>

      <ItemList
        icon={NoteIcon}
        title="Psikotes 3" 
        done={false}
        settings={settings}
      >
        <ItemCardInfo keys="Tanggal pembayaran" value="12/12/2021" />
      </ItemList>
        
    </PageContainer>
  );
};

export default Psikotes;
