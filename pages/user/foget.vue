<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					找回密码
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="user-form">
			<form>
				<view class="cu-form-group">
					<input name="input" v-model="name" placeholder="请输入用户名(必填)"></input>
				</view>
				<view class="cu-form-group">
					<input name="input" v-model="code" placeholder="请输入验证码"></input>
					<view class="sendcode text-blue" v-if="show" @tap="SendCode">发送</view>
					<view class="sendcode text-gray" v-if="!show">{{ times }}s</view>
				</view>
				<view class="cu-form-group">
					<input name="input" v-model="password" type="password" placeholder="输入新密码"></input>
				</view>
				<view class="cu-form-group">
					<input name="input" v-model="repassword" type="password" placeholder="再次输入密码"></input>
				</view>
				<view class="user-btn flex flex-direction">
					<button class="cu-btn bg-blue margin-tb-sm lg" @tap="userFoget">确认修改</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
			AppStyle:this.$store.state.AppStyle,
				
				times: 60,
				show:true,
				
				name:"",
				code:"",
				password:"",
				repassword:"",
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			validatePassword(password) {
			  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/;
			  return regex.test(password);
			},
			userFoget() {
				var that = this;
				if (that.name == ""||that.code == ""||that.password == ""||that.repassword == "") {
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(!that.validatePassword(that.password)){
					uni.showToast({
						title:"密码必须包含字母、数字和特殊符号，且长度必须大于8",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.password!=that.repassword){
					uni.showToast({
						title:"两次密码不一致",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {
					'name':that.name,
					'code':that.code,
					'password':that.password,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.userFoget(),
					data:{"params":JSON.stringify(that.$API.removeObjectEmptyKey(data))},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.back();
						}
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						uni.stopPullDownRefresh()
					}
				})
			},
			SendCode() {
				var that = this;
				if (that.name == "") {
					uni.showToast({
						title:"请输入用户名",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {
					'name':that.name
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.SendCode(),
					data:{"params":JSON.stringify(that.$API.removeObjectEmptyKey(data))},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.getCode();
						}
						
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						uni.stopPullDownRefresh()
					}
				})
			},
			getCode() {
			  this.show = false
			  this.timer = setInterval(()=>{
				this.times--
				if(this.times===0){
				  this.show = true
				  clearInterval(this.timer);
				  this.times = 60;
				}
			  },1000)
			}
		}
	}
</script>

<style>
</style>
