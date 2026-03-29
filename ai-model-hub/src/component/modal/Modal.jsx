import ModalCard from "./ModalCard";

const Modal = ({ modals, setSelectedAi, selectedAI }) => {
  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold  tracking-tighter mb-4">
          Choose Your AI Model
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          One subscription gives you access to all frontier AI models
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-11/12 mx-auto">
        {modals.map((modal) => {
          return (
            <ModalCard
              key={modal.id}
              setSelectedAi={setSelectedAi}
              selectedAI={selectedAI}
              modal={modal}
            ></ModalCard>
          );
        })}
      </div>
    </>
  );
};

export default Modal;
