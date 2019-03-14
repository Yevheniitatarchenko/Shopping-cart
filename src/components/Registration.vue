<template>
	<div>

		<div class="row">
  		<div class="col-md-4 col-md-offset-4">
    		<form>
					 <h3 class="text-center">Registration</h3>

						<div class="form-group">
							<input 
								v-model="form.email"
								v-validate="'required'"
								name="email" 
								type="text" 
								class="form-control" 
								placeholder="Email" 
							>
							<span>{{ errors.first('email') }}</span>
						</div>
						<div class="form-group">
							<input 
								v-validate="'required'" 
								name="password" 
								type="password" 
								class="form-control" 
								:class="{'is-danger': errors.has('password')}" 
								placeholder="Password" ref="password"
							>
							<span 
								v-show="errors.has('password')" 
								class="help is-danger"
							>
								{{ errors.first('password') }}
							</span>
						</div>
						<div class="form-group">
							<input 
								v-validate="'required|confirmed:password'" 
								name="password_confirmation" 
								type="password" 
								class="form-control" 
								:class="{'is-danger': errors.has('password_confirmation')}" 
								placeholder="Password confirmation"
							>
							<span 
								v-show="errors.has('password_confirmation')" 
								class="help is-danger"
							>
								{{ errors.first('password_confirmation') }}
							</span>
						</div>

						<div class="form-group text-center">
							<button 
								v-on:click="modal.showModal = true" 
								type="button" 
								class="btn btn-success" 
								style="width: 100%"
							>
								Отправить
							</button>
						</div>

				</form>
  		</div>
		</div>


		<div
			v-if="modal.showModal"
			@click="modal.showModal = !modal.showModal"
			class="modal-mask"
		>
			<div class="modal-wrapper">
				<div class="modal-container">
					<a class="modal_close"><i class="fas fa-times"></i></a>
					<div class="message">
						<h5>"{{ modal.message }}"</h5>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {                                   
			return {
				form: {
					email: '',
					password: '',
					password_confirmation: '',
				},
				
				modal: {
					showModal: false,
					message: 'Спасибо за регистрацию'
				}
				
			}
		},
	}
</script>

<style scoped>
span {
	color: #dc3545;
}

h3 {
	margin-bottom: 50px;
}

.btn {
	margin-top: 20px;
}

.modal-mask {
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .8);
	display: table;
	transition: opacity .3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 300px;
	min-height: 80px;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all .3s ease;
	font-family: Helvetica, Arial, sans-serif;
}

.modal_close  {
	background: transparent;
	border: none;
	float: right;
	font-size: 21px;
	margin: -10px -18px 0px 0px;
}

.fa-times:before {
  color: #545b62;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

.message{
	text-align: center;
}

</style>


