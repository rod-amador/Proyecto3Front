import React, {Component} from "react"

class Count extends Component {
    state= {}
    render(){
        return (
            <div className="uk-flex uk-flex-center uk-align-center"  style={{color:"white"}} uk-grid="true" uk-countdown="date: 2020-07-30T24:00:00+00:00">

                <section>
                    <article className="uk-countdown-number uk-countdown-days">                                         </article>
                    <article className="uk-countdown-label  uk-text-center">    Days        </article>
                </section>

                        <div className="uk-countdown-separator">:</div>

                <section>
                    <article className="uk-countdown-number uk-countdown-hours">                                        </article>
                    <article className="uk-countdown-label  uk-text-center">    Hours       </article>
                </section>

                        <div className="uk-countdown-separator">:</div>

                <section>
                    <article className="uk-countdown-number uk-countdown-minutes">                                      </article>
                    <article className="uk-countdown-label  uk-text-center">    Minutes     </article>
                </section>

                        <div className="uk-countdown-separator">:</div>

                <section>
                    <article className="uk-countdown-number uk-countdown-seconds">                                      </article>
                    <article className="uk-countdown-label  uk-text-center">  Seconds       </article>
                </section>
            </div>
        )}}

export default Count