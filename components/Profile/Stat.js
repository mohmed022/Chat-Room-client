import React from 'react';

const Stat = () => {
    return (
            <div className="stats shadow block d-flex align-c lg:flex-nowrap flex-wrap justify-between wid-100-100 bg-w mt-5">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      {/* <i class="fa-regular fa-thumbs-up fs-33 p-3 rad-100-50 bb-1 cursor-pointer"></i> */}
      <i class="fa-solid fa-thumbs-up fs-33 p-3 rad-100-50 bb-1 cursor-pointer"></i>
    </div>
    <div className="stat-title">اعجاب</div>
    <div className="stat-value text-primary">25.6K</div>
    {/* <div className="stat-desc">21% في الشهر الماضي</div> */}
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">تمت ر</div>
    <div className="stat-value text-secondary">10</div>
    {/* <div className="stat-desc">21% في الشهر الماضي</div> */}
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="/av.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title"> مهمه منتهيه</div>
    <div className="stat-desc text-secondary">31 مهمة متبقية</div>
  </div>
  
</div>
    );
}

export default Stat;
