/* Styles */
import "../styles/StudioStyle.css";

export function Studio() {
  return (
    <>
      <div>
        <h1 id="h1">Studio</h1>
      </div>
      <div className="page-container">
        <div className="text-container">
          <div>
            <h4 id="h4">open studio times:</h4>
          </div>

          <div>
            <p className="p-studio">
              Wednesdays and Fridays from 14:00-18:00. 
              <br />
              Feel free to come by to
              chat and shop!
            </p>
          </div>

          <div>
            <h4 id="h4">by appointment:</h4>
          </div>

          <div>
            <p className="p-studio">
              Outside of the Open Studio, visiting the studio is by <strong>appointment
              only</strong>.
              <br />
              Please e-mail to info@brightstone.co.uk with the date and time you
              would like to come by. 
              <br />
              I aim to reply within two working days.
            </p>
          </div>

          <div>
            <h4 id="h4">studio address & contact:</h4>
          </div>

          <div>
            <p className="p-studio">
              Khyber Pass, Whitby YO21 3PZ, United Kingdom
              <br />
              telephone: +446645714126
              <br />
              email: info@brightstone.co.uk
            </p>
          </div>
        </div>

        <div className="img-container">
          <img
            src="../img/anne-nygard-wheel.jpg"
            alt="image of trimming a bowl on the pottery wheel"
          />
        </div>
      </div>
    </>
  );
}
