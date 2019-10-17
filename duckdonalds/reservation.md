---
title: Home Page
layout: default
permalink: /reservation
---
<div id="reservation">  
    <form class="form-reservation">
        <h2 class="reservation-title">Haz tu reserva</h2>
        <div class="contenedor-inputs">
            <input type="text" class="input-48" placeholder="Nombre">
            <input type="text" class="input-48" placeholder="Apellidos">
                <label>Comensales: </label><select id="select" class="input-20">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </select>
            <label id="l-date" for="date">Fecha: </label><input type="date" id="date" class="input-20">
            <input type="email" class="input-100" placeholder="email">
            <input type="number" class="input-100" placeholder="Numero Telefono">
            <textarea class="input-100" placeholder="Indicanos si tienes alguna alergia"></textarea><br>
            <input type="submit" value="Reservar" class="btn-enviar">
        </div>    
    </form>
</div>
