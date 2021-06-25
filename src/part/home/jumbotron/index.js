import React from 'react'
import './index.scss'
import vector from 'assets/images/jumbotron.png'
import Button from 'components/button'

export default function Jumbotron() {
    return (
        <div>
            <div className="container">
                <div className="k-jumbotron">
                    <img src={vector} alt="Rencanakan Penginapan" className="k-jumbtron-img" />
                    <div className="k-jumbotron-content">
                        <h1 className="title">Rencanakan Penginapan Kamu</h1>
                        <p className="desc">Pilih dulu tempat nginepnya, sesuaikan dengan budget kamu, lalu pesan kamarnya</p>
                       <Button isLinked isPrimary>Lengkapnya</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
