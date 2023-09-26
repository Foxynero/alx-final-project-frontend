import React from "react";
import Footer from "../Views/Footer";

const ErrorPage = () => {
  return (
    <div>
      <div>
        {/* SERVICE INFORMATION START */}
        <section className="section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h4 className="title title-line pb-5">
                    <span style={{ color: "red" }}>Ooops sorry !!</span>
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-1">
                    The page you are looking for is protected. Please login to
                    view.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6 mt-4 pt-2">
                    <a href>
                      <div className="service-info-img position-relative d-block overflow-hidden">
                        <img
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIUFBISEhQZFBgYHBoYGBgaFSEcGBoZGRwZHBgaGRgeJS4lHh4rIRwYJzgoKy8xNTY1GiQ7QDszQC40NjEBDAwMDw8QHBISGjEsJSE+NTQ/PzE0NTQ/NDs6NDY0NDE0NDQ0MTYxNDE0NDQ0NDY0MTE0MTQ0NDQ0MTQxMTQ0NP/AABEIANAA8gMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgIBB//EAEEQAAIBAwIEBAUBBQUFCQAAAAECAAMREgQhBTFBURMicZEGMkJhsYEUYnKCoSNSssHwM0NTc6IVFiQ0VGOS0fH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAkEQEAAgIBBAICAwAAAAAAAAAAAQIDEUEEEiExIlEToUJhgf/aAAwDAQACEQMRAD8A/ZoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICeSbT1Iq/KB6zHce8ZjuPeU4gXMx3HvGY7j3lOIFzMdx7xmO495TiBczHce8ZjuPeU4gXMx3HvGY7j3lOIFzMdx7xmO495TiBczHce8ZjuPeU4gXMx3HvGY7j3lOIFzMdx7xmO495TiBczHce8ZjuPeU4gXMx3HvGY7j3lOIFzMdx7xmO495TiBczHce8ZjuPeU4gXAwPI3nuZ5qlbW67TQgIiICRV+UlkVflAqxESKREQEREDyzgcyB6m09TE41Wp5pTairM+KeNUoZ00zJCoDbzMSfluAL3J6TX0tEIlOmCWCKqAsbsQoAuT32gSREQEREBERAREQEREBERAREQEREBERAjrfT6zTmZW+n1mnKhERASKvyksir8oFWIiRSIiAiJW1uoZAFprk73C3BwFubORyA7czyH2D5xKhTemy1SAgxcsWxC4MHDZdLECWVNwCNwRcH7HcTNbQBgRUqu/Im7hVBBDKQigAWIBF78us80NDp3UVKeW/yutRwx+4Yt5vU3B+8m101YlPSPUVjTqXfa6VMbBh1D22Vx+gbmOoFyVCIiAiIgIiICIiAiJj8b4uaJREALHdr8gOg9Tv7TVazadQxe9aRuWxEh0moWoi1F5ML+h6j9DJpJjXhqJiY3BERIpERAjrfT6zTmZW+n1mnKhERASKvyksir8oFWIiRSIiAmVqtQqVqtR7kU6SY2Fz52fMgdzggueVuYF5qzNaktTVFW5KqXFz52BLptaxUbmxO59DdJCfTcMzDvqAL1FCNTUnEICSqsb+ZhdgWFr5EbgCR63gSmz0lQupLWqLmGN7hc2uyAdMdh2NrSU11ovXYpU2xJdmJRsiBigJsLEjYAfa8m1QU1qSlamRBYOrMKYxPyvY23vyI337Ro2zdTWzSlUCsjrVpjFhZgS4R1PQjFn3Fx1mtM7iOlWk1FlBCmsHYA7BnDICFJ2Bd1Jt1ues0ZICIiUIiICIiAiIgR6msqIztyUXP/ANTmuCV/Er1ajgEsrHfewuNh+m09/FGtuRRXkLM/r9I/z/UTO4Rnk+LKpwa+RsLEdPvPVSmqTP2+bny92WKx6he+GNdixpMdm3X7N2/UfidTPzlGIIINiLEHqCORnecN1Yq01fqdmHZhz/195nPTU7b6PL3R2zwtRETzveREQI630+s05mVvp9ZpyoREQEir8pLIq/KBViIkUiJ8JsCTsBzJ5D1gfZncTpKrU9RcrgyF7HYpdlOX2XNmv03h9fmP7Ioqdazm1O3dASC/rsv3PKVDrKKOqiv+0pUBSoAfEIaxs2CAgKRdSoAHynvA6LVUkZbPYKCrXJtYoQym/wBiBJKdQMMlIIPIg3HvOU0HE3potOrRq1qZbBWakVZQXxpq/iWDr8oDXvuLg85FruJGsSlIPQSmxviQrPUU9ChIxU8+7bEWBvqsTadQxe0Ujdm1qUFasRZQtJlyOPnZgFdFy5BQWVvuQOVt7k53hfEqgepTZTWquc1KABSAiJ/af8P5RvyO9hfyzY0uofJqVUBaijLy3wdOWaE72BNiOYNuhBMmJidStbRaNwtRESNEREBERARKXF+K0dLTNWs2K3CqALu7n5URRuzHsJip8XBGQ6vSajSU3IVatQKUBPyipgSaZP70Dfr6Gk5ydFY9yN5H/wBlaf8A4Se0uRNd1vticdZ86hT/AOytP/wk9pZo0lRQqKFA6AWE92iJtM+5IpWvqCImbxbivgPpExy/aK3g3ytjdWbK1t/ltbbnMttKIiBHW+n1mnMyt9PrNOVCIiAkVflJZFX5QKsREiqur19Onsxu1ssF3bH+8RyVf3mIH3mZwqjQ1i12qr4o8QriarPTxKqyriDgbBrbAi45nnMzimiRaVO6gtQqYVbi+fiACnXa/wAzk4DI3sS46S98LVbVqyH60Rx6ozK39GT2m+34725fl1kimvbW1dHS6em9ZqVNQgubIuRPRRtzJsB6zC4R8XsQDqKYRGuVZLnAdM052t9Qvz3Alf4y1fjs2mVrInzno1QjYHuqg7ju32mCdUFv4gwtvfmhA38rf5HedMeGJru3Lz5+ptW/bTzr27T4g19Oqi0KTBvECuXRr4oGBVgR9RK2X0J6WOfw/RtW/s6AConlapa6rbYqg+tx7Drc7HnzSKswUGmxIZ0YFc/412O4FsgQduZmvV+JqrDw0UaVEUXKjKy7KCHtiiXuNxflyl7JrHx55Z/JGSd344dOaul0ShC1mbzW3arUPViBu34HLYTA4jxatqWSnRQowOahbGuByJLfJTU7g3yv6zzwrglSsS4BpI27VGF6tT7qG3/mf9ARvOv4fw+lQTCkuIO5PNmPdmO5PrOc9tf7l3rN7caj9sTQ8J1GnptU8Rqj5B3pBiyMLYuqs/mLkbg3ALKuwBM16NVXVXQ5KwDKe4O4M0JjFPAqlP8Ad1WLJ+7VN2dfR92H3DdxMS7xGo0uRESKREQOZ43YcR4YalsLVwl+Xj4rhb97HO0v/FlSkui1bVrYeE+V+RuLKPUm1pa4vwqjqqZo11yUkMLGzKw+V0Ybqw6GZFL4SQvTfU6nUasUyGRKzqUVhyYqqjNh0LQqlxCrqF0vCtJ4jUX1JpUalQfOgFMswUnkzY43+5kXFeEpw79n1OkeopNalSqI9Z6i1lqsEa4cmzi9wVtynT8a4TT1VI0quQFwyupxdHU3V0bowMzdJ8MkVaVbVaqrqzROVJXCKiNa2ZVAMmtyJ5QMqtwldVxPXU6tWsESnpnVErMiksrqScTf6enczQ+GC9LVazReI1WlSFJ0Z2ydPEDZUy53a2IO+/mlDV8B/aOKamoXrUMaFDCrSbA3LOGW5BVhYDY9hOk4NwajpUZKYY5sXd3bJ3c7Fnfqbe0DhNTw2ppWqajXUNQ5Wo1RtZQ1Z8tMvdS1AkAKBYFQp2vOp+JKbPV4S6KXVdSrsyqSFQ0nszHou43Mrf8Acvyfs51uoOl/9PdLYXvh4mOWHS3O3WbXE9FXcacaav8As4R0ZxgGFSmtr09+W3WBpREQiOt9PrNOZlb6fWacqEREBIq/KSyKvygVYiV9dqCiFlAZyQqKeRdiFUH7XNz9gZFZOtolzXrsf7M/+Gf/AJYveqPulVm9FVjOdTiFSgyVFW9T+0oleivazE91V0v6CfoWn0aJSFH5lC4tf6r/ADFvubkn1n5o6hqtSoGyUEojE/Mi2XPf6mCrc9cQes7YY3M14l5OqmKxFuYfUWwtcnqSeZJ3JP3JJJ9Z8VEY1DU07V6QCq+PzIDchksfvvcYm3MWsfc8FmVlZG8Nr/7QZXUWvviCxUmwIsRvcierJX4ah87BfWSJlqabQl6dMK51en+WlqE31OmPLB0O9ROQI5jY423X5U4drNNUV1pGta63RckqI1skdCbpew53ANtzvNH4XuaxcpSJYHKtpqy4Obf7+ktgW2Fnxv0sBz7KeLumImH15x0tMW5hyWt11fQ1EFvF07jyIxs9NgLsivyYWuQG7EXFhN3hnFqNcE02uR8ynZ1/iU7/AK8j0vIfiPhzV6OCWzVldL8iV5i/S6lhf7z8/qsabHLOlUTfkVqD+H+8D9rqeW83WkWr78ueTJfHePG4n9P1iVddplqo1NtgeRHNWG6sp6EEAj7iR8KNXwaZr28TEF7dD27X722veS6nVJTUvUYKB1PUnkAOZJ5ADczk9Choa7MGV9nQ4OByv0Zf3WFmHrbmDLMzNPrFq1VrYlA4eml7hnNNrsKg5KwIfFT5rZ3tuJpyKREwl1erU1rU2fz+TJcRiS9lUC1xsgzuw82XQiBuxMWtrtYA7Lp1bdgq2bIbtZm7jy8gLnIW+/jTarWl1L0wF8pZQhHlYUQQGJ+ZS1U8voItyIGm7E5+rxPVU6ZeoiLYKLucSGAp3LEsoYnJ7AY/JzN7S1qdfqV8HDTF81UscrBGawIYHewLKfQN2FxprRMPS6zXPbKiii5vdWvbJFAuSOQZmuLghNrXnt9brFTTkUPEZkHiH5MHsAfITf5iDbsr/aBsxMepq9Yu3gq/lqHYHmC+AJvt8qbfV4htbGfKXEqwr06Dqm+eRB8xC541AuV1UhU7/OdxbcNmJhfteuBpr4SsDUOTlSMaZdwAQDzxAOWw3G1zJ+H6rWNVVK1JVTAMWAb5zY47kja5Fue1+sGmlW+n1mnMyt9PrNOVCIiAkVflJZFX5QKsq0V8TUG/y0ALD/3XW9/5Ubb/AJh7CWpDwbnqu/jNf/4U7f8ATjIqzxBGam6BA+QKlTUKXU7GzgEg2/8A2fm2qpmkzLZiigbsoDDcqVAXy1ALC7Jf5hsN532oLVqjUVJFNLeKQbFmYXFIHoMbMxHRlA5mfeKCmKYoCktQvZadMgY7Dmf7qqNyRy6bkCbreazuHLJirkjVofnyOCLg3H+rz1Opb4ORjm1eplcklQgBv0N1JKjpkSR3nlvg4/TqD/NTU/4cZ6o6isx5h8+3RXifjMTDlGprfIgAj6uTD0Ybj3nRcF1OtVPFqVlXT2urajdm/u4MLNie7kk7WHWW9F8JAOG1DiooNwipirHpnckkDsLA9b8pr8Y4QmpVVYspQ5Ky2upsVOxBB2JHKccuStvEPR0+G9ImbT5+uGRovi5CxWsuK3sKqklDbqykBlHPe1tr7C03dVo6GoVc1WouzI1+R5qyONweoIM4vXaDTUX8N9RqGcfTT0pdv1ZUKj9Za4Gj02p09N41JSD5dSgCVMQS2KIoxckglr353DTnbt/i9GP8nnviP8bXEKeqornTrhkQ5OHphqmAG4VhYG3PcXNiL3N5n63hmoLpUragMrsFBWkVCZ3CL891UkhbrZiSMiQbDY0/FEq5UagNNzkhVuTEbNg/Jx/XuBK583DQTuf2dWv+8tMMp9wDMOi1rdERRQUlXKmVdFAxUsu5Uf3chkv809aaurotRL2YXFxYjoQR0INwR3Bl+m11B7gH3EyeH/NqQOQrPb9VRm/6y8C3ERCkRED4RPsRAREQEREBERAjrfT6zTmZW+n1mnKhERASKvyksir8oFWVHo1FdqlFl89s0cHFioxDKy7q1gAdiCANpbiRVDQa4Us11A8J2d3LYsaZufLarbH5Qo3sduU8afUVGqVK/glg1kpkuq2pje+J3GTXP3AW/KaQiBBp+JVamWND5WZDeqo3XnyB2kjV9V0oJ+tc/wCSTxws2qalP3kcfzoAf6oT+s1YRlVtbXpg1KlFSigljTqZMoG5OLKtxz5G/wBjPScb055vh/GjJ/jAk3FkvQrgdUf/AAmTUCGVTzBUH1BAlHJa/jNUsSKVdUJABGpoBDfa6hGaob87AX7Cb3CeFCkXqMcqj2u1ycVFrIrOS1trm53O9hyF5NLTU5Kiqx6hQD72liQc7ptJTrad0qLklRqhIPZ3cgg9CLix5i0VdPqPCbTKUKFcA5urYbAqUUWvjcZAjnfHpJeCf+Xo/wAI/Jl6FQDW6gC3gIT0K1vL+t1B9gZ80NAolmN2JZ2I5ZOxY2+wvYfYCWIgIiICIiAiIgIiICIiAiIgR1vp9ZpzMrfT6zTlQiIgJ5ZQdjPUQM9qVS5sNr7cuU8+HU7fiaUQM3w6nb8R4dTt+JpRAzFoOCWCgEgAkWuQL2BP2ufcz3hV/wBGaEQM5kqkEEXB2I2sZ8WnUAAAsALAC1gBsBNKIGfhV/0Z8wrf6ImjEDNFGoNgLe0eHU7fiaUQM3w6nb8R4dTt+JpRAzfDqdvxHh1O34mlEDN8Op2/EeHU7fiaUQM3w6nb8R4dTt+JpRAzfDqdvxHh1O34mlEDN8Op2/EeHU7fiaUQM3w6nb8R4dTt+JpRAzTQqG1x+JpREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERPhgQNqVDrTJ3YMR2suN9/5hPVSui2yYDI4i/Um9h/QzAPw3cOCy2PiFAKfyM4SzXJuWBUm5N/NYWAhfh1slZmRgrAoGp32zqOcrnc2ci47Xgb9GujgMjBgeRB5xVrqqlmYADmb/p+Zz1L4ZCtTOS+RSq2DqBu5DBVcKWOW9wb2npvhoWxUoq+EtMjw7hmUqVYgnYXDGwtfLe9hA6LId/6yOhqVfLE3xYqfVecwavw4zMWyQebK3h7Pd0bCpv5kGNlHQW7S1w/hDUXqOGB8T5lxNlsRtT38otfblcKehuGxkO494DDv/Wc43w2xVFzQYqUyFPzblD4gN/8Aa+X5vvJdL8OqlSnUVlBQqSQliSBWDb3+rxFv/APtYNrValKaNUqMEVRdmY2AH3Mir8Qopjm6rkrOLn6UALN6AETxqNJenUSnsXyN3JYBm5mxN/QCwmXqfh5nsxrsGsMgEQpdVxS11yCg+bHLq3eBpLxegSoFQXY2AIIIN8bMCPISdgGtcySlxGiyh0dWUsaYZTcFwxUqLczcHl2MyqXAnD1ahqC9Z6b1QENr0iuATfyiyqDe/U9Z5r8AqOAGqKCrVWUqrDA1TfJfNs6i4B5WY7QNNuL0QSpLBhbymk+RuSBiMbtuDyvyM9rxKiWZcwCoLNcFbAAFtyALgMtxzFxe0q6nhRcVCSrO7hgzKbKqqVULiwIIuxvfmzd5n1fhlmLFqoa/MspLOP7O6VDlYqcLG1iQfW4dHSqBgrDkQCNrbHlsd5LKfDtO1OmqM2ZGW+/UkgC5JsL2FzyAlyAiIgIiICIiAiIgf//Z"
                          alt=""
                          className="img-fluid mx-auto d-block rounded"
                        />
                        <div className="service-overlay">
                          <div className="service-info text-center">
                            <h6 className="mb-0 text-white shadow title">
                              Clean Design
                            </h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 mt-4 pt-2">
                    <a href>
                      <div className="service-info-img position-relative d-block overflow-hidden">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          className="img-fluid mx-auto d-block rounded"
                        />
                        <div className="service-overlay">
                          <div className="service-info text-center">
                            <h6 className="mb-0 text-white shadow title">
                              Clean Design
                            </h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 pt-2">
                <p className="text-muted mb-2">
                  Login to your account to have access to the full features of
                  the website.
                </p>
                <div className="job-details-desc-item">
                  <div className="float-left mr-2">
                    <i className="mdi mdi-chevron-right text-muted" />
                  </div>
                  <p className="text-muted mb-1">
                    Post a job to tell us about your project. We'll quickly
                    match you with the right freelancers.
                  </p>
                </div>
                <div className="job-details-desc-item">
                  <div className="float-left mr-2">
                    <i className="mdi mdi-chevron-right text-muted" />
                  </div>
                  <p className="text-muted mb-1">
                    Apply to jobs you love, and we'll quickly match you with the
                    right freelancers.
                  </p>
                </div>
                <div className="job-details-desc-item">
                  <div className="float-left mr-2">
                    <i className="mdi mdi-chevron-right text-muted" />
                  </div>
                  <p className="text-muted mb-1">
                    Connect with industry Players and get hired.
                  </p>
                </div>
                <div className="job-details-desc-item">
                  <div className="float-left mr-2">
                    <i className="mdi mdi-chevron-right text-muted" />
                  </div>
                  <p className="text-muted mb-1">
                    Get your project done faster. Decentralized marketplace.
                  </p>
                </div>
                <div className="job-details-desc-item">
                  <div className="float-left mr-2">
                    <i className="mdi mdi-chevron-right text-muted" />
                  </div>
                  <p className="text-muted mb-0">Earn money with Ease</p>
                </div>
                <div className="mt-4">
                  <a href="/login" className="btn btn-primary-outline">
                    Click here to Login
                    <i className="mdi mdi-chevron-double-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SERVICE INFORMATION END */}

        {/* footer start */}
        <Footer />
        {/*end footer*/}
      </div>
    </div>
  );
};

export default ErrorPage;
