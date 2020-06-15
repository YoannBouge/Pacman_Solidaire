<div class="row screen">

    <div class='left col'></div>

    <div class="col-8">
        <div class="scores">
            <div class="leadboard-title">
                <span>Tableau des scores : </span>
            </div>
            <br>
            <table class="leadboard">
                <thead>
                    <tr>
                    <th scope="rang" style="font-weight: initial;">Rang</th>
                    <th scope="pseudo" style="font-weight: initial;">Pseudo</th>
                    <th scope="score" style="font-weight: initial;">Score</th>
                    <th scope="association" style="font-weight: initial;">Association</th>
                    <th scope="region" style="font-weight: initial;">Region</th>
                    </tr>
                </thead>
            
                <tbody>
                    <?php     
                        $result = $pdo->query("SELECT * FROM `partie` ORDER BY score DESC LIMIT 9;");
                        $parties= $result->fetchAll();
                        for($i= 0; $i < count($parties); $i++)
                        {
                            $partie = $parties[$i];
                            $res = $pdo->query("SELECT pseudo, region FROM user WHERE id=".$partie['iduser']);
                            $user = $res->fetch();
                            echo "<tr>
                            <th scope='row'>".$i."</th>
                            <td>".$user['pseudo']."</td>
                            <td>".$partie['score']."</td>
                            <td>".$partie['association']."</td>
                            <td>".$user['region']."</td>
                            </tr>";
                        }
                        if (isset($_SESSION['lastparty']['score'])){
                            echo "<tr>
                                <th scope='row'>10</th>
                                <td>".$_SESSION['user']['login']."</td>
                                <td>".$_SESSION['lastparty']['score']."</td>
                                <td>".$_SESSION['lastparty']['association']."</td>
                                <td>".$_SESSION['user']['region']."</td>
                                </tr>";
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </div>

    <div class='right col'></div>

</div>