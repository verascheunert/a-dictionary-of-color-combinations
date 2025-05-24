export default function Home() {
  return (
    <div className="p-8">
      <div
        className="grid grid-cols-3 grid-rows-4 gap-2 h-screen p-2"
        style={{
          gridTemplateAreas: `
            'a b b'
            'a b b'
            'a c d'
            'e e d'
          `,
        }}
      >
        <div className="bg-[#8E6B5D]" style={{ gridArea: 'a' }}>

        </div>
        <div
          className="bg-[#C2574B] flex items-end"
          style={{ gridArea: 'b' }}
        >
          <h1 className="text-white p-2">A Dictionary of Color Combinations</h1>
        </div>
        <div className="bg-[#2A6B76]" style={{ gridArea: 'c' }}></div>
        <div className="bg-[#B4966E]" style={{ gridArea: 'd' }}></div>
        <div className="bg-[#D59C2A]" style={{ gridArea: 'e' }}></div>
      </div>
    </div>
  );
}
