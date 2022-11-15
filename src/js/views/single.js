import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { arr } from "../component/array";

const style = {
	width: '80px',
	height: '80px',
	objectFit: 'cover',
	padding: '0% !important'

}

const rounded = {
	borderRadius: '100%',
	objectFit: 'cover',
	width: '280px',
	height: '280px',
	objectPosition: 'top'
}

const OffCanvasBtn = () => {
	return (
		<button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
			Preferences
		</button>
	)
}

export const Single = () => {

	const [trips, useTrip] = useState(arr);
	const [user_trip, setuser_trip] = useState({
		user: "Bud",
		country: "Chile",
		city: "Santiago",
		start_date: "1/1/1",
		end_date: "2/2/2"
	});

	const [budget, setBudget] = useState('');
	const handleBudget = (e) => {
		setBudget(e.target.value)
	}

	const handleChange = (e) => {
		e.preventDefault();
		console.log(e.currentTarget)
	}

	return (
		<div className="container">
			<div className="mb-5">
				<h1 className='matches_title mb-2'>Your Matches!</h1>
				<OffCanvasBtn className='float-end' />
			</div>
			<div className="row d-flex mx-auto justify-content-center">

				{
					!!trips && trips.length > 0 ? (
						trips.map((trip, i) => {
							if (trip.country === user_trip.country && trip.city === user_trip.city && trip.start_date === user_trip.start_date) {
								return (
									<div className='col-3 justify-content-center p-3' key={i}>
										<div className="trip_card card border-0 mb-5 justify-content-center">
											<a className="mx-auto" href="">
												<img src={trip.user_img} className="card-img-top pt-3 mx-auto" alt="..." style={rounded} />
											</a>
											<div className="card-body d-flex p-0">

												<div className='w-100 text-center p-3'>
													<p className="trip_text card-text px-2">{trip.user} goes to {trip.city}, {trip.country} on the same date!</p>
												</div>
											</div>

											<div className="offcanvas offcanvas-end" data-bs-scroll="false" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
												<div className="offcanvas-header">
													<h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
													<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
												</div>
												<div className="offcanvas-body">
													<form>

														<div className="col">
															<p>Traveling...</p>
															<div className='form-check form-check-inline'>
																<input className='form-check-input' type='radio' name='travelling' id='inlineRadio1' value='Alone' />
																<label className='form-check-label' htmlFor='inlineRadio1'>Alone</label>
															</div>
															<div className='form-check form-check-inline'>
																<input className='form-check-input' type='radio' name='travelling' id='inlineRadio2' value='Couple' />
																<label className='form-check-label' htmlFor='inlineRadio2'>Couple</label>
															</div>
															<div className='form-check form-check-inline'>
																<input className='form-check-input' type='radio' name='travelling' id='inlineRadio3' value='Group' />
																<label className='form-check-label' htmlFor='inlineRadio3'>Group</label>
															</div>

														</div>

														<div className="col">

															<p>With children?</p>
															<div className='form-check form-check-inline'>
																<input className='form-check-input' type='radio' name='with_children' id='inlineRadio1' value='true' />
																<label className='form-check-label' htmlFor='inlineRadio1'>Yes</label>
															</div>
															<div className='form-check form-check-inline'>
																<input className='form-check-input' type='radio' name='with_children' id='inlineRadio2' value='false' />
																<label className='form-check-label' htmlFor='inlineRadio2'>No</label>
															</div>

														</div>

														<div className="col">

															<label htmlFor='customRange1' className='form-label'>Approximate budget (in US dollars)</label>
															<div className='d-flex'>
																<input type='range' className='slider form-range w-75 mb-3 in-line' min='50' max='20000' step="50" id='customRange1' onInput={handleBudget} name='budget' value={budget} />
																<label className='form-label in-line ms-4' id='rangeValue'>$ {budget}</label>
															</div>

														</div>

														<div className="col">

															<p className='w-75'>Which type of activity do you prefer the most?</p>
															<div className='row'>
																<div className='col col-md-12'>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' id='inlineCheckbox1' value='Trekking' name='activities' />
																		<label className='form-check-label' htmlFor='inlineCheckbox1'>Trekking</label>
																	</div>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' id='inlineCheckbox2' value='Restaurants' name='activities' />
																		<label className='form-check-label' htmlFor='inlineCheckbox2'>Restaurants</label>
																	</div>

																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' id='inlineCheckbox3' value='Museums' name='activities' />
																		<label className='form-check-label' htmlFor='inlineCheckbox3'>Museums</label>
																	</div>
																</div>
																<div className='col col-md-12'>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' id='inlineCheckbox3' value='Disco' name='activities' />
																		<label className='form-check-label' htmlFor='inlineCheckbox3'>Disco & Nights Out</label>
																	</div>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' id='inlineCheckbox3' value='Malls' name='activities' />
																		<label className='form-check-label' htmlFor='inlineCheckbox3'>Malls & Shopping</label>
																	</div>
																</div>
															</div>

														</div>

														<div className="col mt-3">

															<p>Do you prefer a specific gender?</p>
															<div className='form-check form-check-inline'>
																<input className='form-check-input' type='radio' name='gender_specific' id='inlineRadio1' value='Female' />
																<label className='form-check-label' htmlFor='inlineRadio1'>Woman</label>
															</div>
															<div className='form-check form-check-inline'>
																<input className='form-check-input' type='radio' name='gender_specific' id='inlineRadio2' value='Male' />
																<label className='form-check-label' htmlFor='inlineRadio2'>Man</label>
															</div>
															<div className='form-check form-check-inline'>
																<input className='form-check-input' type='radio' name='gender_specific' id='inlineRadio3' value='Both' />
																<label className='form-check-label' htmlFor='inlineRadio3'>I don't believe in binary gender labelling</label>
															</div>

														</div>

														<div className="col mt-3">

															<p>Any age in particular for your perfect partner?</p>
															<div className='row'>
																<div className='col-md-12 col-2'>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' name='partner_age' id='inlineRadio4' value='18' />
																		<label className='form-check-label' htmlFor='inlineRadio4'>18-24</label>
																	</div>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' name='partner_age' id='inlineRadio5' value='25' />
																		<label className='form-check-label' htmlFor='inlineRadio5'>25-31</label>
																	</div>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' name='partner_age' id='inlineRadio6' value='32' />
																		<label className='form-check-label' htmlFor='inlineRadio6'>32-38</label>
																	</div>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' name='partner_age' id='inlineRadio7' value='39' />
																		<label className='form-check-label' htmlFor='inlineRadio7'>39-45</label>
																	</div>
																</div>
																<div className='col-md-12 col-2'>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' name='partner_age' id='inlineRadio8' value='45' />
																		<label className='form-check-label' htmlFor='inlineRadio8'>45-51</label>
																	</div>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' name='partner_age' id='inlineRadio9' value='52' />
																		<label className='form-check-label' htmlFor='inlineRadio9'>52-59</label>
																	</div>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' name='partner_age' id='inlineRadio10' value='60' />
																		<label className='form-check-label' htmlFor='inlineRadio10'>60+</label>
																	</div>
																	<div className='form-check form-check-inline'>
																		<input className='form-check-input' type='radio' name='partner_age' id='inlineRadio11' value='Any' />
																		<label className='form-check-label' htmlFor='inlineRadio11'>I don't have an age preference</label>
																	</div>
																</div>
															</div>
														</div>

														<div className="col mt-3">

															<p>Where do you plan to stay?</p>
															<div className='form-check'>
																<input className='form-check-input' type='radio' name='stay' id='Radio1' value='Hotel' />
																<label className='form-check-label' htmlFor='Radio1'>Hotel</label>
															</div>
															<div className='form-check'>
																<input className='form-check-input' type='radio' name='stay' id='Radio2' value='Apartment' />
																<label className='form-check-label' htmlFor='Radio2'>Apartment/Airbnb</label>
															</div>
															<div className='form-check'>
																<input className='form-check-input' type='radio' name='stay' id='Radio3' value='Camping' />
																<label className='form-check-label' htmlFor='Radio3'>Camping</label>
															</div>
															<div className='form-check'>
																<input className='form-check-input' type='radio' name='stay' id='Radio4' value='Anywhere' />
																<label className='form-check-label' htmlFor='Radio4'>I'll stay at someone else's.</label>
															</div>

														</div>


													</form>


												</div>
											</div>

										</div>
									</div>
								)
							}
							else {
								return ""
							}
						}
						)
					) : (
						<div className="col-md-12 text-center">
							<h4>There are no matches for your trip.</h4>
						</div>
					)
				}
			</div>
		</div>
	);
};