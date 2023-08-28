const couponsSection = document.getElementById('coupons');
const addCouponForm = document.querySelector('#add-coupon-form form');
const couponCodeInput = document.getElementById('coupon-code');
const couponDescriptionInput = document.getElementById('coupon-description');

addCouponForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const couponCode = couponCodeInput.value;
  const couponDescription = couponDescriptionInput.value;

  if (couponCode && couponDescription) {
    const couponElement = document.createElement('div');
    couponElement.classList.add('coupon');
    couponElement.innerHTML = `
      <h3>${couponCode}</h3>
      <p>${couponDescription}</p>
    `;

    couponsSection.appendChild(couponElement);

    couponCodeInput.value = '';
    couponDescriptionInput.value = '';
  }
});