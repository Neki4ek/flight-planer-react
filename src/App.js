import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Make Your Flight Simulation</h1>
          <form class="add-stage" id="form"> 
            <div class="add-stage-element add-stage-element-1">
              <p class="course-label">Course:</p>
              <input type="text" class="course" name="course"/>
            </div>
            <div class="add-stage-element add-stage-element-2">
              <p class="speed-label">Indicated Air Speed (m/s):</p>
              <input type="number" class="speed" step="0.01" name="course"/>
            </div>
            <div class="add-stage-element add-stage-element-3">
              <p class="altitude-label">True Altitude:</p>
              <input type="number" class="altitude" name="course"/>
            </div>
            <div class="add-stage-element add-stage-element-4">
              <button onClick={(evt) => {evt.preventDefault(); console.log(new FormData(document.getElementById('form'), this))}} type="submit" class="plus"><img src="Union (1).png"/></button>
            </div>
          </form>
      </header>
      <main class="main-info">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d69934.32592146858!2d60.723338649999995!3d56.78678595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1700587609013!5m2!1sru!2sru" width="623" height="604" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="info-table">
          <table class="table">
            <thead>
              <div class="table-head">
                <h2>Flight Plan Stages</h2>
                <div class="table-head-info">
                  <tr class="table-element">
                    <th class="table-element-info table-element-info-1">#</th>
                    <th class="table-element-info table-element-info-2">Course</th>
                    <th class="table-element-info table-element-info-3 table-speed">Indicated Air Speed</th>
                    <th class="table-element-info table-element-info-4">TrueAltitude</th>
                  </tr>
                </div>
              </div>
            </thead>
            <tbody>
              <div class="added-flight">
                <tr class="table-element">
                  <td class="table-element-item table-element-item-1">1</td>
                  <td class="table-element-item table-element-item-2">56.84071, 60.65071</td>
                  <td class="table-element-item table-element-item-3 table-speed">9999</td>
                  <td class="table-element-item table-element-item-4">9999</td>
                  <td>
                      <button class="minus"><img src="Union.png"/></button>
                  </td>
                </tr>
              </div>
              <div class="added-flight">
                <tr class="table-element">
                  <td class="table-element-item table-element-item-1">2</td>
                  <td class="table-element-item table-element-item-2">56.84071, 60.65071</td>
                  <td class="table-element-item table-element-item-3 table-speed">9999</td>
                  <td class="table-element-item table-element-item-4">9999</td>
                  <td>
                      <button class="minus"><img src="Union.png"/></button>
                  </td>
                </tr>
              </div>
              <div class="added-flight">
                <tr class="table-element">
                  <td class="table-element-item table-element-item-1">3</td>
                  <td class="table-element-item table-element-item-2">56.84071, 60.65071</td>
                  <td class="table-element-item table-element-item-3 table-speed">9999</td>
                  <td class="table-element-item table-element-item-4">9999</td>
                  <td>
                      <button class="minus"><img src="Union.png"/></button>
                  </td>
                </tr>
              </div>
              <div class="added-flight">
                <tr class="table-element">
                  <td class="table-element-item table-element-item-1">4</td>
                  <td class="table-element-item table-element-item-2">56.84071, 60.65071</td>
                  <td class="table-element-item table-element-item-3 table-speed">9999</td>
                  <td class="table-element-item table-element-item-4">9999</td>
                  <td>
                      <button class="minus"><img src="Union.png"/></button>
                  </td>
                </tr>
              </div>
              <div class="added-flight">
                <tr class="table-element">
                  <td class="table-element-item table-element-item-1">5</td>
                  <td class="table-element-item table-element-item-2">56.84071, 60.65071</td>
                  <td class="table-element-item table-element-item-3 table-speed">9999</td>
                  <td class="table-element-item table-element-item-4">9999</td>
                  <td>
                      <button class="minus"><img src="Union.png"/></button>
                  </td>
                </tr>
              </div>
              <div class="added-flight">
                <tr class="table-element">
                  <td class="table-element-item table-element-item-1">6</td>
                  <td class="table-element-item table-element-item-2">56.84071, 60.65071</td>
                  <td class="table-element-item table-element-item-3 table-speed">9999</td>
                  <td class="table-element-item table-element-item-4">9999</td>
                  <td>
                      <button class="minus"><img src="Union.png"/></button>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
