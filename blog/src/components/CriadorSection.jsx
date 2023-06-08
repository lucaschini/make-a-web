import CriadorTemp from "./CriadorTemp";

export default function CriadorSection() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-6xl text-center">Navegar por criadores</h1>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <CriadorTemp />
        <CriadorTemp />
        <CriadorTemp />
        <CriadorTemp />
        <CriadorTemp />
        <CriadorTemp />
        <CriadorTemp />
        <CriadorTemp />
        <CriadorTemp />
        <CriadorTemp />
      </div>
    </div>
  );
}