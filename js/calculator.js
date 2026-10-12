/**
 * Almighty Solar Energy - Indore (Madhya Pradesh)
 * Interactive Solar & PM Surya Ghar Subsidy Calculator Engine
 * (Zero PDF Dependencies - Instant On-Screen Sizing & WhatsApp Dossier)
 */

const SOLAR_CONFIG = {
  averageTariff: 7.2,           // INR per kWh (MPPKVVCL Indore Domestic average slab)
  sunHoursPerDay: 5.2,          // Average peak solar irradiance hours in Indore/Malwa
  daysPerMonth: 30,
  costPerKw: 58000,             // INR per kW turnkey (Tier-1 hardware)
  maxCentralSubsidy: 78000,     // Central MNRE DBT limit (3kW+)
  installerPromoDiscountMax: 30000, // Almighty Solar seasonal/promotional discount
  whatsappNumber: '917773000775' // Official Almighty Solar Hotline
};

function formatINR(number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(number);
}

function calculateSolarPlan(monthlyBill) {
  // 1. Calculate monthly units consumed
  const monthlyUnits = monthlyBill / SOLAR_CONFIG.averageTariff;
  
  // 2. Daily units required
  const dailyUnits = monthlyUnits / SOLAR_CONFIG.daysPerMonth;
  
  // 3. Recommended system capacity (kW) - rounded to nearest 0.5 kW, minimum 1 kW
  let rawKw = dailyUnits / SOLAR_CONFIG.sunHoursPerDay;
  let recommendedKw = Math.max(1, Math.round(rawKw * 2) / 2);
  
  // 4. Gross Estimated Turnkey Cost
  const grossCost = recommendedKw * SOLAR_CONFIG.costPerKw;
  
  // 5. Central Government MNRE Subsidy (PM Surya Ghar: Muft Bijli Yojana)
  let centralSubsidy = 0;
  if (recommendedKw >= 3) {
    centralSubsidy = 78000;
  } else if (recommendedKw >= 2) {
    centralSubsidy = 60000;
  } else {
    centralSubsidy = 30000;
  }
  
  // 6. Almighty Solar Special Promotional / Sizing Discount (up to ₹30,000)
  let promoDiscount = Math.min(SOLAR_CONFIG.installerPromoDiscountMax, Math.round(recommendedKw * 6000));
  const totalSavingsBenefit = centralSubsidy + promoDiscount;
  
  // 7. Net Investment Required by Consumer
  const netInvestment = Math.max(0, grossCost - totalSavingsBenefit);
  
  // 8. Financial Return & Savings
  const annualSavings = monthlyBill * 12;
  const paybackYears = (netInvestment / annualSavings).toFixed(1);
  const lifetime25YearSavings = (annualSavings * 25) - netInvestment;
  const co2OffsetTonnes = ((monthlyUnits * 12 * 0.82 * 25) / 1000).toFixed(1);

  return {
    recommendedKw,
    monthlyUnits: Math.round(monthlyUnits),
    grossCost,
    centralSubsidy,
    promoDiscount,
    totalSubsidy: totalSavingsBenefit,
    netInvestment,
    annualSavings,
    paybackYears: paybackYears > 0 ? paybackYears : '2.4',
    lifetime25YearSavings,
    co2OffsetTonnes
  };
}

function updateCalculatorUI(bill) {
  const result = calculateSolarPlan(bill);

  // Update DOM elements if present
  const elBillVal = document.getElementById('calc-bill-value');
  const elKw = document.getElementById('calc-recommended-kw');
  const elUnits = document.getElementById('calc-monthly-units');
  const elGross = document.getElementById('calc-gross-cost');
  const elSubsidy = document.getElementById('calc-total-subsidy');
  const elNet = document.getElementById('calc-net-cost');
  const elAnnual = document.getElementById('calc-annual-savings');
  const elPayback = document.getElementById('calc-payback-years');
  const elLifetime = document.getElementById('calc-lifetime-savings');
  const elCo2 = document.getElementById('calc-co2-offset');
  const elWhatsAppBtn = document.getElementById('calc-whatsapp-btn');

  if (elBillVal) elBillVal.textContent = formatINR(bill);
  if (elKw) elKw.textContent = `${result.recommendedKw} kW`;
  if (elUnits) elUnits.textContent = `${result.monthlyUnits} Units`;
  if (elGross) elGross.textContent = formatINR(result.grossCost);
  if (elSubsidy) elSubsidy.textContent = `- ${formatINR(result.totalSubsidy)}`;
  if (elNet) elNet.textContent = formatINR(result.netInvestment);
  if (elAnnual) elAnnual.textContent = `${formatINR(result.annualSavings)}/yr`;
  if (elPayback) elPayback.textContent = `${result.paybackYears} Yrs`;
  if (elLifetime) elLifetime.textContent = formatINR(result.lifetime25YearSavings);
  if (elCo2) elCo2.textContent = `${result.co2OffsetTonnes} T`;

  // Trigger pop effect for visual tactile feedback
  [elKw, elGross, elSubsidy, elNet, elAnnual].forEach(el => {
    if (el) {
      el.classList.remove('val-pop');
      void el.offsetWidth;
      el.classList.add('val-pop');
    }
  });

  // Pre-generate WhatsApp message dossier
  if (elWhatsAppBtn) {
    const message = encodeURIComponent(
      `*SOLAR PROPOSAL INQUIRY - ALMIGHTY SOLAR ENERGY (INDORE)*\n` +
      `----------------------------------------\n` +
      `• *Monthly Electricity Bill:* ${formatINR(bill)}\n` +
      `• *Estimated Consumption:* ~${result.monthlyUnits} Units/mo\n` +
      `• *Recommended Solar Plant:* ${result.recommendedKw} kW On-Grid\n` +
      `• *Est. Turnkey Cost:* ${formatINR(result.grossCost)}\n` +
      `• *PM Surya Ghar Subsidy:* ${formatINR(result.centralSubsidy)}\n` +
      `• *Almighty Promotional Saving:* ${formatINR(result.promoDiscount)}\n` +
      `• *Net Effective Investment:* ${formatINR(result.netInvestment)}\n` +
      `• *Estimated Annual Savings:* ${formatINR(result.annualSavings)}/year\n` +
      `• *Capital Payback Period:* ~${result.paybackYears} Years\n` +
      `• *Discom Jurisdiction:* MPPKVVCL (Indore Discom)\n` +
      `----------------------------------------\n` +
      `Hello Almighty Solar team, please arrange a free engineering rooftop survey and share technical feasibility details for my location in Indore.`
    );
    elWhatsAppBtn.href = `https://wa.me/${SOLAR_CONFIG.whatsappNumber}?text=${message}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('bill-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      updateCalculatorUI(val);
    });
    // Initial run with default slider value
    updateCalculatorUI(parseFloat(slider.value) || 4500);
  }
});
