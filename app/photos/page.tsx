import DownloadButton from "./DownloadButton"

export default function PhotosPage() {
  const images = [
    'https://images.unsplash.com/photo-1716534133620-4d383fc9f3be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1715405155995-61757307e065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1578232977693-537bf723e655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-full h-48 mb-2 overflow-hidden">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <DownloadButton image={image} />
        </div>
      ))}
    </div>
  );
}