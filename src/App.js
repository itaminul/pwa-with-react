import React from "react";
const App = () => {
    const data = [
        {
            id: 1,
            name: 'abc'
        },
        {
            id: 2,
            name: 'abc'
        },
        {
            id: 3,
            name: 'abc'
        },
    ]
    return(
        <div>
                        <h1>Doctor Prescription</h1>
                        <div class="container">
            <header class="row">
                <div class="col-10">
                <div class="doc-details">
                    <p class="doc-name">Doctor name: ABC</p>
                    <p class="doc-meta">MS - General Surgery , F.I.A.G.E.S , F.UROGYN(USA) , FECSM (Oxford , UK) , MBBS</p>
                    <p class="doc-meta">Rgn: 2341</p>
                </div>

                <div class="clinic-details">
                    <p class="doc-meta">Clinic Name</p>
                    <p class="doc-meta">#1, Crescent Park Street, Chennai</p>
                </div>

                </div>
                <div class="col-2 datetime">
                <p>Date: 18/03/16</p>
                <p>Time: 03:13</p>
                </div>
            </header>
            <div class="prescription">
                <p>Rx  Name of patient, M/35</p>    
                <table>
            <tr>
                <th></th>
                <th>Type</th>
                <th>Name of the drug</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Period</th>
            </tr>
            <tr>
                <td>1.</td>
                <td>Tablet</td>
                <td>Brufen Brufen Brufen</td>
                <td>400 mg</td>
                <td>1 - 0 - 1</td>
                <td>10 days</td>
            </tr>
                    <tr>
                <td>2.</td>
                <td>Lotion</td>
                <td>Brufen</td>
                <td>400 mg</td>
                <td>1 - 0 - 1</td>
                <td>10 days</td>
            </tr>
                    
                            <tr>
                <td>3.</td>
                <td>Syrub</td>
                <td>Brufen</td>
                <td>400 mg</td>
                <td>1 - 0 - 1</td>
                <td>10 days</td>
            </tr>
                    
                    <tr>
                    <td colspan="5"><p>Before food (Don’t take the tab, I say)</p></td></tr>
                            <tr>
                <td>4.</td>
                <td>Oil</td>
                <td>Brufen</td>
                <td>400 mg</td>
                <td>1 - 0 - 1</td>
                <td>10 days</td>
            </tr>

            </table>
                

            </div>
            
            <p>Dr. ABC</p>
            <p>This is a digitally generated Prescription</p>
            </div>
        </div>
    )
}

export default App;