export function App() {
  return (
    <div
      style={{
        backgroundColor: 'orange',
        padding: '3%',
        width: '100%',
        height: '100%',
        margin: 0,
      }}
    >
      <iframe
        title="pretto"
        src="http://localhost:3000?mode=iframe"
        width="94%"
        height="94%"
      />
    </div>
  )
}

export default App
