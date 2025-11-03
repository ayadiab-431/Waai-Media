import './CounterSection.css';

export default function CounterSection (){
    return (
        <section className="counter-section">
            <div className="counter-section-container px-4 my-0 mx-auto d-flex align-items-center justify-content-between flex-column flex-md-row">
                <div className="counter d-flex flex-column align-items-center justify-content-center gap-2">
                    <span className="counter-number text-center">+15</span>
                    <span className="counter-name text-center">Client Server</span>
                </div>
                <div className="counter d-flex flex-column align-items-center justify-content-center gap-2">
                    <span className="counter-number text-center">+400</span>
                    <span className="counter-name text-center">Campaigns Launched</span>
                </div>
                <div className="counter d-flex flex-column align-items-center justify-content-center gap-2">
                    <span className="counter-number text-center">+2,000</span>
                    <span className="counter-name text-center">Social Content Published</span>
                </div>
                <div className="counter d-flex flex-column align-items-center justify-content-center gap-2">
                    <span className="counter-number text-center">+18</span>
                    <span className="counter-name text-center">Industries Covered</span>
                </div>
                <div className="counter d-flex flex-column align-items-center justify-content-center gap-2">
                    <span className="counter-number text-center">+10</span>
                    <span className="counter-name text-center">Marketing Experts</span>
                </div>
            </div>
        </section>
    );
}