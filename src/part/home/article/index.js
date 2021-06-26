import React from "react";
import "./index.scss";
import BasicCard from "components/basic_card";
import image from "assets/images/jakarta.jpg";
import SectionTitle from "components/section-title";
import Button from "components/button";
export default function Article() {
  return (
    <div>
      <div className="container mt-5 mb-4">
        <SectionTitle name="Artikel" subName="Terbaru" />
        <p>Lihat berita terbaru tentang pariwisata</p>
        <div className="row">
          <div className="col-md-3">
            <BasicCard
              name="Berita 1"
              summary="hari ini paman datang, pamanku dari desa. Dibawakannya lauk dan pisan"
              image={image}
            />
          </div>
          <div className="col-md-3">
            <BasicCard
              name="Berita 1"
              summary="hari ini paman datang, pamanku dari desa. Dibawakannya lauk dan pisan"
              image={image}
            />
          </div>
          <div className="col-md-3">
            <BasicCard
              name="Berita 1"
              summary="hari ini paman datang, pamanku dari desa. Dibawakannya lauk dan pisan"
              image={image}
            />
          </div>
          <div className="col-md-3">
            <BasicCard
              name="Berita 1"
              summary="hari ini paman datang, pamanku dari desa. Dibawakannya lauk dan pisan"
              image={image}
            />
          </div>
        </div>
        <div className="search-article-wrapper">
          <form action="" method="get">
            <div className="form-group-wrapper">
              <input
                type="text"
                className="form-control"
                placeholder="Cari Artikel Disini"
              />
              <Button type="submit" isPrimary>
                Cari Artikel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
