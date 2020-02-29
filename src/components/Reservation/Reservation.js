import React from 'react';

const Reservation = () => {
    return ( 
        <section className="reservation" id="rezerwacja">
            <h2 className="reservation__title">Rezerwacja</h2>

            <div className="reservation__wrapper">
                <div className="reservation__wrapper__price">
                    <table>
                        <thead>
                            <tr>
                                <td rowSpan="2">Ilość osób</td>
                                <td colSpan="4">Ilość dni pobytu</td>
                            </tr>
                            <tr>
                                <td>1-2</td>
                                <td>3-4</td>
                                <td>5-6</td>
                                <td>7 i więcej</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>180 zł</td>
                                <td>160 zł</td>
                                <td>150 zł</td>
                                <td>140 zł</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>200 zł</td>
                                <td>180 zł</td>
                                <td>170 zł</td>
                                <td>160 zł</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>220 zł</td>
                                <td>200 zł</td>
                                <td>190 zł</td>
                                <td>180 zł</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>240 zł</td>
                                <td>220 zł</td>
                                <td>210 zł</td>
                                <td>200 zł</td>
                            </tr>
                        </tbody>
                    </table>

                    <div onClick={() => window.open(`/Regulamin rezerwacji GM Apartament Szczecin.pdf`, "_blank")}>Regulamin rezerwacji (plik pdf)</div>
                </div>
                <div className="reservation__wrapper__payment">
                    <h4>Płatności:</h4>
                    <p>
                        <span>Grażyna&nbsp;Czyżyk</span>
                        <span>ul.&nbsp;Somosierry&nbsp;31D/3</span>
                        <span>71-181&nbsp;Szczecin</span>

                        <span>Nr&nbsp;konta:</span>

                        <span>PKO&nbsp;Bank&nbsp;Polski&nbsp;S.A</span>
                        <span>52&nbsp;1020&nbsp;4795&nbsp;0000&nbsp;9102&nbsp;0180&nbsp;7981</span>

                        <span>For international transfers please use our currency account:</span>

                        <span>SWIFT&nbsp;(BIC)&nbsp;–&nbsp;BPKOPLPW</span>
                        <span>52&nbsp;1020&nbsp;4795&nbsp;0000&nbsp;9102&nbsp;0180&nbsp;7981</span>
                    </p>
                </div>
            </div>
        </section>
     );
}
 
export default Reservation;