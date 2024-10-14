import React, { useState } from 'react';

const PricingSystem = () => {
  
    const [basePrice, setBasePrice] = useState(0);
  
    const [seasons, setSeasons] = useState([
        { seasonName: 'High', startDate: '', endDate: '', percentage: 0 },
        { seasonName: 'Medium', startDate: '', endDate: '', percentage: 0 },
        { seasonName: 'Low', startDate: '', endDate: '', percentage: 0 }
    ]);

    // Función para calcular el precio final según la temporada
    const calculatePrice = (seasonPercentage) => {
        return basePrice * (1 + seasonPercentage / 100);
    };

    return (
        <div>
            {/* Input para el precio base */}
            <div>
                <label>Precio Base:</label>
                <input
                    type="number"
                    value={basePrice}
                    onChange={(e) => setBasePrice(Number(e.target.value))}
                />
            </div>

            {/* Inputs para definir las temporadas */}
            {seasons.map((season, index) => (
                <div key={index}>
                    <h3>{season.seasonName}</h3>
                    <label>Fecha de inicio:</label>
                    <input
                        type="date"
                        value={season.startDate}
                        onChange={(e) =>
                            setSeasons((prev) => {
                                const newSeasons = [...prev];
                                newSeasons[index].startDate = e.target.value;
                                return newSeasons;
                            })
                        }
                    />
                    <label>Fecha de fin:</label>
                    <input
                        type="date"
                        value={season.endDate}
                        onChange={(e) =>
                            setSeasons((prev) => {
                                const newSeasons = [...prev];
                                newSeasons[index].endDate = e.target.value;
                                return newSeasons;
                            })
                        }
                    />
                    <label>Porcentaje sobre el precio base:</label>
                    <input
                        type="number"
                        value={season.percentage}
                        onChange={(e) =>
                            setSeasons((prev) => {
                                const newSeasons = [...prev];
                                newSeasons[index].percentage = Number(e.target.value);
                                return newSeasons;
                            })
                        }
                    />
                    <p>
            Precio para {season.seasonName}: {calculatePrice(season.percentage)}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PricingSystem;
