import React, {Component} from "react"

class Countdown extends Component {
    state= {}
    render(){
        return (
            <div className="uk-flex uk-flex-center uk-align-center" uk-grid="true" uk-countdown="date: 2020-07-30T24:00:00+00:00">

                <section>
                    <article className="uk-countdown-number uk-countdown-days">                                         </article>
                    <article className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">    Days        </article>
                </section>

                        <div className="uk-countdown-separator">:</div>

                <section>
                    <article className="uk-countdown-number uk-countdown-hours">                                        </article>
                    <article className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">    Hours       </article>
                </section>

                        <div className="uk-countdown-separator">:</div>

                <section>
                    <article className="uk-countdown-number uk-countdown-minutes">                                      </article>
                    <article className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">    Minutes     </article>
                </section>

                        <div className="uk-countdown-separator">:</div>

                <section>
                    <article className="uk-countdown-number uk-countdown-seconds">                                      </article>
                    <article className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">  Seconds       </article>
                </section>
            </div>
        )}}

export default Countdown