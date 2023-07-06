import { PageContainer, ItemList } from "../components";
import { ReactComponent as NoteIcon } from "../../../assets/icon/note-lg.svg";

const Psikotes = () => {
  return (
    <PageContainer title="Psikotes">
      <ItemList icon={NoteIcon} title="Psikotes 1" keys="Tanggal pembayaran" value="12/12/2021" done={true} />
      <ItemList icon={NoteIcon} title="Psikotes 2" keys="Tanggal pembayaran" value="12/12/2021" done={true} />
      <ItemList icon={NoteIcon} title="Psikotes 3" keys="Tanggal pembayaran" value="12/12/2021" done={true} />
      <ItemList icon={NoteIcon} title="Psikotes 4" keys="Tanggal pembayaran" value="12/12/2021" done={true} />
      <ItemList icon={NoteIcon} title="Psikotes 5" keys="Tanggal pembayaran" value="12/12/2021" done={false} />
      {/* <ItemCardInfo label="Status">
        <div className="text-primary">Telah dikerjakan</div>
      </ItemCardInfo> */}
      
    </PageContainer>
  );
};

export default Psikotes;
