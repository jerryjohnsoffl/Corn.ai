import InnerContent from './components/InnerContent';
import './InteractionAnalytics.css';

function App() {
  return (
    <div className='analytics flex'>
      <aside></aside>
      <div className="analytics-section flex flex-col">
        <h1>Recent interactions</h1>
        <div className="container full-100">
          <div className="content">
            <div className="inner-content flex flex-col full-100">
                <InnerContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
